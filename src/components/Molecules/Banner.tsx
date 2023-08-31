import { BannerImage } from "../Atoms/BannerImage";
import { BannerText } from "../Atoms/BannerText";

export const Banner = () => {
  return (
    <div className="w-full overflow-hidden">
      <BannerImage />
      <BannerText />
    </div>
  )
}