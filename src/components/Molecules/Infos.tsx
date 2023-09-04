import { Text } from "../Atoms/Text";

interface InfosProps {
  name: string,
  date: string,
  locale: string,
}

export const Infos = ({...props} : InfosProps) => {
  return (
    <div className="flex flex-col h-12 px-3 py-4">
      <Text 
        className="font-bold text-md lg:text-lg"
        text={props.name}
      />
      <Text 
        className="text-md text-sky-500"
        text={props.date}
      />
      <Text 
        className="text-md text-gray-400"
        text={props.locale}
      />
    </div>
  )
}