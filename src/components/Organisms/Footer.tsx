import mobile from "../../assets/mobile.png";
import desktop from "../../assets/desktop.png";
import { FcIdea, FcNews, FcComboChart } from 'react-icons/fc';

import "../../App.css";

export const Footer = () => {
  return (
    <footer className="w-full h-full overflow-hidden">
      <div className="flex flex-col z-0 items-center footerBackground pt-10 mb-44 relative">
        <div className="footerStyle1">
          <span className="footerStyle2" />
          <span className="footerStyle3" />
        </div>
        <h1 className="text-2xl text-white font-bold text-center mb-10 mx-10">
          Publique e venda seus eventos na Plataforma Uticket
        </h1>
        <button className="w-[300px] bg-white hover:bg-gray-200 duration-100 text-blue-900 rounded-full text-md font-bold p-4 m-2">
          Falar com consultor
        </button>
      </div>
      <div className="flex flex-col lg:flex-row-reverse mx-3 xl:m-auto xl:h-[500px] xl:footerMargin text-gray-700">
        <div className="relative w-full h-[500px]">
          <div className="absolute p-1 top-0 w-[301px] z-20 h-[615px] rounded-[42px] shadow-2xl bg-slate-100">
            <img
              className="bg-white rounded-[37px]" 
              src={mobile} 
              alt="" 
            />
          </div>
          <div className="absolute p-1 bottom-24 ml-[260px] z-10 rounded-[42px] w-[925px] h-[478px] shadow-2xl bg-slate-100">
          <img
              className="rounded-[37px]" 
              src={desktop} 
              alt="" 
            />
          </div>
        </div>        
        <div className="mt-44 lg:mt-0 max-w-[500px] lg:mr-6">
          <p className="text-3xl text-center lg:text-start mb-10">
            <b>É rápido</b>, fácil e grátis
          </p>
          <div className="flex mb-10">
            <div className="icons rounded-md">
              <FcIdea className="text-2xl"/>
            </div>
            <div className="flex flex-col ml-4">
              <p className="text-lg font-bold">
                Crie
              </p>
              <p>
                Em minutos você cria seu evento e cadastra seus ingressos ou inscrições online para vender.
              </p>
            </div>
          </div>
          <div className="flex w-full mb-10">
            <div className="icons rounded-md">
              <FcNews className="text-2xl" />
            </div>
            <div className="flex flex-col ml-4">
              <p className="text-lg font-bold">
                Publique
              </p>
              <p>
                Depois de criado, seu evento já está com vendas liberadas pelo nosso site e aplicativo.
              </p>
            </div>
          </div>
          <div className="flex w-full mb-10">
            <div className="icons rounded-md">
              <FcComboChart className="text-2xl" />
            </div>
            <div className="flex flex-col ml-4">
              <p className="text-lg font-bold">
                Venda
              </p>
              <p>
                Divulgue, acompanhe as vendas em tempo real, e receba direto em sua conta em apenas 2 dias.
              </p>
            </div>
          </div>
        </div>        
      </div>
    </footer>
  )
}