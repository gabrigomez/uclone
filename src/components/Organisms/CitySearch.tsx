import { CiLocationOn } from "react-icons/ci"
import { RiCloseCircleLine } from "react-icons/ri"

interface CitySearchProps {
  isCitySearch: boolean,
  openCitySearch: () => void, 
  setSearch: (value: React.SetStateAction<string>) => void 
}

export const CitySearch = ({isCitySearch, openCitySearch, setSearch} : CitySearchProps) => {
  return (
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
  )
}