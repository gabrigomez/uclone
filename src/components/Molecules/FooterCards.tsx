import { Text } from "../Atoms/Text";

export interface FooterCardsProps {
  description: string,
  icon: React.ReactNode,
  title: string,
}

export const FooterCards = ({...props} : FooterCardsProps) => {
  return (
    <div className="flex mb-10">
      <div className="icons rounded-md">
        {props.icon}
      </div>
      <div className="flex flex-col ml-4">
        <Text 
          className="text-lg font-bold"
          text={props.title}
        />
        <Text 
          className=""
          text={props.description}
        />
      </div>
    </div>
  )
}