import { BannerImage } from "../Atoms/BannerImage";
import { BannerText } from "../Atoms/BannerText";

export const Banner = () => {
  return (
    <div className="w-full h-[500px]">
      <BannerImage />
      <BannerText />
    </div>
  )
}