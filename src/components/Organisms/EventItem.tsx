import { Image } from "../Atoms/Image";
import { Price } from "../Atoms/Price";
import { Infos } from "../Molecules/Infos";
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
      <Infos
        name={props.name}
        date={props.date} 
        locale={props.locale}
      />
    </a>
  )
}