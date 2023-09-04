interface TextProps {
  text: string,
  className?: string,
}

export const Text = ({...props} : TextProps) => {
  return (
    <p className={props.className}>
      {props.text}
    </p>
  )
}