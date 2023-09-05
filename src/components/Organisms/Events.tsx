import { useState } from "react";
import { EventItem, EventItemProps } from "./EventItem";
import { Button } from "../Atoms/Button";

interface EventsProps {
  events: Array<EventItemProps> | null
}

export const Events = ({events}: EventsProps) => {
  const [eventList, setEventList] = useState(events?.slice(0,5));
  const [loadCount, setLoadCount] = useState(5);
  
  const [isOverEvents, setIsOverEvents] = useState(false);

  const loadMore = () => {
    setLoadCount(loadCount + 5);
    
    if(eventList!.length < events!.length) {
      setEventList(events?.slice(0, loadCount + 5));
    } else {
      setIsOverEvents(true);
    }
  }

  return (
    <div className="bg-white mt-20 mx-3 xl:eventMargin relative">
      <div className="grid gap-6 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {eventList?.map((event) => {
          return (
            <EventItem
              key={event.name}
              img={event.img}
              avatar={event.avatar}
              name={event.name}
              date={event.date}
              locale={event.locale}
              price={event.price} 
            />
          )
        })}
      </div>
      {!isOverEvents ? (
        <Button
          onClick={loadMore}
          text="Carregar mais eventos"
          className="w-full mt-4 p-2 rounded-full border border-sky-500 hover:bg-sky-300 text-sky-600 duration-200"
        />
      ) : (
        <Button
          isDisabled={true}
          text="Todos os eventos carregados"
          className="w-full mt-4 p-2 rounded-full border border-gray-500 text-gray-600 duration-200"
        />
      )}
    </div>
  )
}