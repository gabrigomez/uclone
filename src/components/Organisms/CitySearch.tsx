import { CityLocationMolecule } from "../Molecules/CityLocationMolecule";
import { CitySearchMolecule } from "../Molecules/CitySearchMolecule";

interface CitySearchProps {
  isCitySearch: boolean,
  openCitySearch: () => void, 
  setSearch: (value: React.SetStateAction<string>) => void,
}

export const CitySearch = ({isCitySearch, openCitySearch, setSearch} : CitySearchProps) => {
  return (
    <div className={`${isCitySearch ? 'z-10' : ''} w-full flex items-center justify-start pl-2`}>
      <CityLocationMolecule 
        isCitySearch={isCitySearch}
        openCitySearch={openCitySearch}
      />
      <CitySearchMolecule
        isCitySearch={isCitySearch}
        openCitySearch={openCitySearch}
        setSearch={setSearch} 
      />
    </div>
  )
}