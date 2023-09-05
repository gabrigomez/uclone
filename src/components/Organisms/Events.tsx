import { useState } from "react";
import { EventItem, EventItemProps } from "./EventItem";

interface EventsProps {
  events: Array<EventItemProps> | null
}

export const Events = ({events}: EventsProps) => {
  const [eventList, setEventList] = useState(events?.slice(0,5));
  const [loadCount, setLoadCount] = useState(5);
  
  const [message, setMessage] = useState("Carregar mais eventos");

  const loadMore = () => {
    setLoadCount(loadCount + 5);
    
    if(eventList!.length < events!.length) {
      setEventList(events?.slice(0, loadCount + 5));
    } else {
      setMessage("Todos os eventos carregados");
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
      <button onClick={loadMore} className="w-full mt-4 p-2 rounded-full border border-sky-500 hover:bg-sky-300 text-sky-600 duration-200">
        {message}
      </button>
    </div>
  )
}