import { useState } from "react";
import { Banner } from "../Molecules/Banner";
import { SearchEvent } from "../Molecules/SearchEvent";
import { Events } from "./Events";

import { eventItems } from "../../data";
import { EventItemProps } from "./EventItem";

export const Main = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<Array<EventItemProps> | null>(eventItems);

  const onSubmit = () => {
    const filteredResult = eventItems.filter((event: EventItemProps) =>
      event.name.toLowerCase().includes(search.toLowerCase())
    );

    setData(filteredResult);
  }

  const pull_data = (data: string) => {
    setSearch(data);
  };

  return (
    <main className="relative overflow-hidden pb-10">
      <Banner />
      <SearchEvent onClick={onSubmit} func={pull_data} />
      {data ? (
        <Events events={data} />
      ) : (
        <p>
          Nenhum evento encontrado
        </p>
      )}
    </main>
  )
}