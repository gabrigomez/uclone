import { Text } from "../Atoms/Text";
import { Button } from "../Atoms/Button";
import { Previews } from "../Molecules/Previews";
import { StyleMolecule } from "../Molecules/StylesMolecule";

import { FooterCardItems } from "../../data";
import { FooterCards } from "../Molecules/FooterCards";

export const Footer = () => {
  return (
    <footer className="w-full overflow-hidden">
      <div className="flex flex-col z-0 items-center footerBackground pt-10 mb-64 relative">
        <StyleMolecule />
        <Text 
          className="text-2xl text-white font-bold text-center mb-10 mx-10"
          text="Publique e venda seus eventos na Plataforma Uticket"
        />
        <Button
          className="w-[300px] bg-white hover:bg-gray-200 duration-100 text-blue-900 rounded-full text-md font-bold p-4 m-2"
          text="Falar com consultor"
        />
      </div>
      <div className="flex flex-col lg:pb-44 lg:flex-row-reverse mx-3 xl:m-auto xl:footerMargin text-gray-700">
        <Previews />
        <div className="mt-44 lg:mt-0 max-w-[500px] lg:mr-12">
          <p className="text-3xl text-center lg:text-start mb-10">
            <b>É rápido</b>, fácil e grátis
          </p>          
          {FooterCardItems.map((card) => {
            return (
              <FooterCards
                key={FooterCardItems.indexOf(card)}
                icon={card.icon}
                title={card.title}
                description={card.description} 
              />
            )
          })}
        </div>        
      </div>
    </footer>
  )
}