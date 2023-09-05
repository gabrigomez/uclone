interface ButtonProps {
  className: string,
  isDisabled?: boolean,
  text: string,
  onClick?: () => void,
}

export const Button = ({...props} : ButtonProps) => {
  return (
    <button 
      onClick={props.onClick} 
      className={props.className}
      disabled={props.isDisabled}
    >
      {props.text}
    </button>
  )
};