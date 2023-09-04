interface ImageProps {
  className: string,
  src: string,
}

export const Image = ({...props}: ImageProps) => {
  return (
    <img 
      className={props.className}
      src={props.src}
    />
  )
};