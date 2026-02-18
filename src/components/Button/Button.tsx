interface ButtonProps {
    text: string
    type: "submit" | "reset" | "button"
}

const Button = ({text, type} : ButtonProps) => {
  return (
    <button type={type}>
        {text}
    </button>
  )
}

export default Button