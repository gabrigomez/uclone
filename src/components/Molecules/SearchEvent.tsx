import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";

interface SearchEventProps {
  onClick?: () => void;
  func: (value: string) => void;
}

export const SearchEvent = ({...props} : SearchEventProps) => {
  const [search, setSearch] = useState("");
  props.func(search);
  
  return (
    <div className="searchEvent flex items-center justify-between rounded-full w-11/12 md:w-2/4 xl:w-3/5">
      <input 
        className='rounded-full pl-5 w-36 outline-none placeholder:text-gray-700'
        type="text"
        placeholder="Buscar Evento" 
        name="Busca" 
        id="" 
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className='flex items-center bg-orange-400 hover:bg-orange-300 duration-300 rounded-full w-40 m-1 p-2'
        onClick={props.onClick}
      > 
        <div className="flex items-center">
          <CiLocationOn className="text-white mr-2" />
          <span className='text-white'>
            Todas
          </span>
        </div>
      </button>
    </div>
  )
}