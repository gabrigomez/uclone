import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { RiCloseCircleLine } from "react-icons/ri";

interface SearchEventProps {
  onClick?: () => void;
  search: (value: string) => void;
  searchType: (value: boolean) => void;
}

export const SearchEvent = ({...props} : SearchEventProps) => {
  const [search, setSearch] = useState("");
  const [isCitySearch, setIsCitySearch] = useState(false);
  const [nameSearch, setNameSearch] = useState(true);

  props.search(search);
  props.searchType(nameSearch);

  const openCitySearch = () => {
    setIsCitySearch(!isCitySearch);
    setNameSearch(!nameSearch);
  };
  
  return (
    <div className="searchEvent flex items-center justify-between rounded-full w-11/12 md:w-2/4 xl:w-3/5">
      <input 
        className={`${isCitySearch ? 'w-0' : 'w-full pl-5'} rounded-full outline-none placeholder:text-gray-700`}
        type="text"
        placeholder="Buscar Evento" 
        name="Busca" 
        id="" 
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className={`${isCitySearch ? 'w-full' : 'hover:bg-orange-300'} flex bg-orange-400 items-center rounded-full duration-500 w-40 m-1 p-2`}        
      > 
        <div className={`${isCitySearch ? 'w-full flex items-center z-10' : ''} flex items-center justify-center`}>
          <div className={`${isCitySearch ? 'hidden' : 'flex items-center'}`} onClick={openCitySearch}>
            <CiLocationOn className="text-white mr-2" />
            <span className='text-white'>
              Todas
            </span>
          </div>
          <div className={`${isCitySearch ? 'flex items-center w-full bg-orange-400' : 'hidden'}`}>
            <input 
              className={`${isCitySearch ? 'block w-full bg-orange-400 outline-none placeholder:text-white pl-2' : 'hidden'}`}
              placeholder="Procure por sua cidade"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={openCitySearch}>
              <RiCloseCircleLine 
                className="text-3xl text-white"
              />
            </button>
          </div>
        </div>
      </button>
    </div>
  )
}