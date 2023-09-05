import { useState } from "react";
import { Banner } from "../Molecules/Banner";
import { SearchEvent } from "../Molecules/SearchEvent";
import { Events } from "./Events";

import { eventItems } from "../../data";
import { EventItemProps } from "./EventItem";
import { NoResult } from "../Atoms/NoResult";

export const Main = () => {
  const [search, setSearch] = useState("");

  const filteredResult = eventItems.filter((event: EventItemProps) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  const pull_data = (data: string) => {
    setSearch(data);
  };

  return (
    <main className="relative overflow-hidden pb-10">
      <Banner />
      <SearchEvent func={pull_data} />
      {filteredResult.length > 0 ? (
        <Events events={filteredResult} />
      ) : (
        <NoResult />
      )}
    </main>
  )
}