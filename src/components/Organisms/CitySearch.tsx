import { CityLocationMolecule } from "../Molecules/CityLocationMolecule";
import { CitySearchMolecule } from "../Molecules/CitySearchMolecule";

interface CitySearchProps {
  isCitySearch: boolean,
  openCitySearch: () => void, 
  setSearch: (value: React.SetStateAction<string>) => void,
}

export const CitySearch = ({isCitySearch, openCitySearch, setSearch} : CitySearchProps) => {
  return (
    <div className={`${isCitySearch ? 'w-full flex items-center z-10' : ''} flex items-center justify-center`}>
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