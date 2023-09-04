import { Image } from "../Atoms/Image";
import { Price } from "../Atoms/Price";
export interface EventItemProps {
  price?: string,
  img: string,
  avatar: string,
  name: string,
  date: string,
  locale: string,
}

export const EventItem = ({...props}: EventItemProps) => {
  return (
    <a className="flex flex-col h-[300px] relative">
      <Price price={props.price} />
      <Image
        className="flex items-center font-bold justify-center text-white absolute 
        right-5 bottom-32 border-4 border-white bg-black rounded-full w-14 h-14"
        src={props.avatar}
      />
      <Image
        className="h-[160px] rounded-md"
        src={props.img}
      />
      <div className="flex flex-col h-12 px-3 py-4">
        <p className="font-bold text-md lg:text-lg">
          {props.name}
        </p>
        <p className="text-md text-sky-500">
          {props.date}
        </p>
        <p className="text-md text-gray-400">
          {props.locale}
        </p>
      </div>
    </a>
  )
}