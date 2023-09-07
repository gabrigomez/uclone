import { RiCloseCircleLine } from "react-icons/ri";

interface CitySearchMoleculeProps {
  isCitySearch: boolean,
  openCitySearch: () => void,
  setSearch: (value: React.SetStateAction<string>) => void,
}

export const CitySearchMolecule = ({...props} : CitySearchMoleculeProps) => {
  return (
    <div className={`${props.isCitySearch ? 'flex items-center w-full bg-orange-500 text-white' : 'hidden'}`}>
      <input 
        className={`${props.isCitySearch ? 'block w-full bg-orange-500 outline-none placeholder:text-gray-200 pl-2' : 'hidden'}`}
        placeholder="Procure por sua cidade"
        onChange={(e) => props.setSearch(e.target.value)}
      />
      <button onClick={props.openCitySearch}>
        <RiCloseCircleLine 
          className="text-3xl text-white"
        />
      </button>
    </div>
  )
}