import banner from "../../assets/banner.jpg";

export const BannerImage = () => {
  return (
    <img
      className="banner overflow-hidden max-w-max 2xl:max-w-full" 
      src={banner} 
      alt=""     
    />
  )
}