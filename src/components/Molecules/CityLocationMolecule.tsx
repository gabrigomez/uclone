import { CiLocationOn } from "react-icons/ci";
import { Text } from "../Atoms/Text";

interface CityLocationMoleculeProps {
  isCitySearch: boolean,
  openCitySearch: () => void,
}

export const CityLocationMolecule = ({isCitySearch, openCitySearch}: CityLocationMoleculeProps) => {
  return (
    <div className={`${isCitySearch ? 'hidden' : 'flex w-full items-center'}`} onClick={openCitySearch}>
      <CiLocationOn className="text-white mr-2" />
      <Text 
        className='text-white'
        text="Todas"
      />
    </div>
  )
}