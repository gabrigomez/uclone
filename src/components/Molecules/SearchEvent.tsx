import { useState } from "react";
import { CitySearch } from "../Organisms/CitySearch";

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
        <CitySearch 
          openCitySearch={openCitySearch}
          setSearch={setSearch}
          isCitySearch={isCitySearch}
        />
      </button>
    </div>
  )
}