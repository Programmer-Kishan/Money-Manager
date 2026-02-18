interface Inputprops {
    label: string;
    type: string;
    name: string;
    options?: string[];
}

const Input = ({label, type, name, options} : Inputprops) => {
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