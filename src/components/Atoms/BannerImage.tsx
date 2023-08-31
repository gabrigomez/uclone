import banner from "../../assets/banner.jpg";
import '../../App.css';

export const BannerImage = () => {
  return (
    <img
      className="banner overflow-hidden max-w-max 2xl:max-w-full" 
      src={banner} 
      alt=""     
    />
  )
}