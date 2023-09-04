import { EventItem, EventItemProps } from "./EventItem";

interface EventsProps {
  events: Array<EventItemProps> | null
}

export const Events = ({events}: EventsProps) => {
  return (
    <div className="bg-white mt-20 mx-3 xl:eventMargin relative">
      <div className="grid gap-6 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {events?.map((event) => {
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
      <button className="w-full mt-4 p-2 rounded-full border border-sky-500 hover:bg-sky-300 text-sky-600 duration-200">
        Carregar mais eventos
      </button>
    </div>
  )
}