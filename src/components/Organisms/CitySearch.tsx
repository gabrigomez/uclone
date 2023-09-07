import { RiCloseCircleLine } from "react-icons/ri";
import { CityLocationMolecule } from "../Molecules/CityLocationMolecule";

interface CitySearchProps {
  isCitySearch: boolean,
  openCitySearch: () => void, 
  setSearch: (value: React.SetStateAction<string>) => void 
}

export const CitySearch = ({isCitySearch, openCitySearch, setSearch} : CitySearchProps) => {
  return (
    <div className={`${isCitySearch ? 'w-full flex items-center z-10' : ''} flex items-center justify-center`}>
      <CityLocationMolecule 
        isCitySearch={isCitySearch}
        openCitySearch={openCitySearch}
      />
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