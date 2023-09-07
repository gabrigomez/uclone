import { Image } from "../Atoms/Image";
import mobile from "../../assets/mobile.png";
import desktop from "../../assets/desktop.png";

export const Previews = () => {
  return (
    <div className="relative w-full h-[500px]">
      <div className="absolute p-1 top-0 w-[301px] z-20 h-[615px] rounded-[42px] shadow-2xl bg-slate-100">
        <Image
          className="bg-white rounded-[37px]" 
          src={mobile}        
        />
      </div>
      <div className="absolute p-1 bottom-24 ml-[260px] z-10 rounded-[42px] w-[925px] h-[478px] shadow-2xl bg-slate-100">
        <Image
          className="rounded-[37px]" 
          src={desktop}       
        />
      </div>
    </div>     
  )
}