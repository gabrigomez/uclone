import { EventItem, EventItemProps } from "./EventItem";
import { Button } from "../Atoms/Button";

interface EventsProps {
  events: Array<EventItemProps> | null,
  isOverEvents: boolean,
  loadMore: () => void,
}

export const Events = ({...props}: EventsProps) => {
  return (
    <div className="bg-white mt-20 mx-3 xl:eventMargin relative">
      <div className="grid gap-6 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {props.events?.map((event) => {
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
      {!props.isOverEvents ? (
        <Button
          onClick={props.loadMore}
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