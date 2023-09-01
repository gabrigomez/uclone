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
    <a className="flex flex-col relative">
      <div className={`${props.price ? 'absolute right-1 top-1 bg-slate-50 rounded-lg font-semibold text-sm p-1' : ''}`}>
        {props.price}
      </div>
      <img 
        className="flex items-center font-bold justify-center text-white absolute right-5 bottom-20 border-4 border-white bg-black rounded-full w-14 h-14"
        src={props.avatar}
      />
      <img 
        className="bg-red-500 h-[160px] rounded-md" 
        src={props.img}
      />      
      <div className="flex flex-col h-2/5 px-3 py-2">
        <p className="font-bold text-lg">
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