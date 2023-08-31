import banner from "../../assets/banner.jpg";
import '../../App.css';

export const BannerImage = () => {
  return (
    <img
      className="banner" 
      src={banner} 
      alt=""     
    />
  )
}