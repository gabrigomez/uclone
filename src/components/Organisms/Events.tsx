import { EventItem } from "./EventItem";

export const Events = () => {
  return (
    <div className="bg-white mt-20 mx-3 relative">
      <EventItem />
      <button className="w-11/12 mt-4 p-2 rounded-full border border-sky-500 hover:bg-sky-300 text-sky-600 duration-200">
        Carregar mais eventos
      </button>
    </div>
  )
}