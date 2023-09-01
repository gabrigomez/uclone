import { EventItem } from "./EventItem";

export const Events = () => {
  return (
    <div className="bg-white mt-20 mx-3 xl:eventMargin relative">
      <div className="grid gap-6 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
      </div>
      <button className="w-full mt-4 p-2 rounded-full border border-sky-500 hover:bg-sky-300 text-sky-600 duration-200">
        Carregar mais eventos
      </button>
    </div>
  )
}