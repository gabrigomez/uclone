import { CiLocationOn } from "react-icons/ci";
import '../../App.css';

export const SearchEvent = () => {
  return (
    <div className="searchEvent flex items-center justify-between rounded-full w-11/12">
      <input 
        className='rounded-full pl-5 w-36'
        type="text"
        placeholder="Buscar Evento" 
        name="" 
        id="" 
      />
      <button
        className='flex items-center bg-orange-500 hover:bg-orange-400 duration-300 rounded-full w-40 m-1 p-2'
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