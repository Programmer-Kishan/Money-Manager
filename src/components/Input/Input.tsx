import type { Inputprops } from "./InputInterface"

const Input = ({label, type, name} : Inputprops) => {
  return (
    <>
        <label>{label}</label>
        <input 
            type={type}
            name={name}
        />
    </>
  )
}

export default Input