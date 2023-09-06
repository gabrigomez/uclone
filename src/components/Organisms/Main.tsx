import { useState } from "react";
import { Banner } from "../Molecules/Banner";
import { SearchEvent } from "../Molecules/SearchEvent";
import { Events } from "./Events";

import { eventItems as events } from "../../data";
import { EventItemProps } from "./EventItem";
import { NoResult } from "../Atoms/NoResult";

export const Main = () => {
  const [search, setSearch] = useState("");
  const [eventList, setEventList] = useState(events?.slice(0,5));
  const [loadCount, setLoadCount] = useState(5);  
  const [isOverEvents, setIsOverEvents] = useState(false);

  const [nameSearch, setNameSearch] = useState(true);

  const loadMore = () => {
    setLoadCount(loadCount + 5);
    
    if(eventList!.length < events!.length) {
      setEventList(events?.slice(0, loadCount + 5));
    } else {
      setIsOverEvents(true);
    }
  }

  const pullSearch = (data: string) => {
    setSearch(data);
  };

  const pullSearchType = (data: boolean) => {
    setNameSearch(data);
  };

  const filteredResult = nameSearch
  ? eventList.filter((event: EventItemProps) => event.name.toLowerCase().includes(search.toLowerCase()))
  : eventList.filter((event: EventItemProps) => event.locale.toLowerCase().includes(search.toLowerCase()));

  return (
    <main className="relative overflow-hidden pb-10">
      <Banner />
      <SearchEvent 
        search={pullSearch}
        searchType={pullSearchType} 
      />
      {filteredResult.length > 0 ? (
        <Events 
          events={filteredResult} 
          isOverEvents={isOverEvents} 
          loadMore={loadMore} 
        />
      ) : (
        <NoResult />
      )}
    </main>
  )
}