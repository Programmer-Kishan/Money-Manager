import type { Inputprops } from "./InputInterface"

interface OptionProps {
    options: string[]
}

const OptionInput = ({label, name, options}: Inputprops & OptionProps) => {
  return (
    <>
        <label>{label}</label>
        <select name={name}>
            {
                options.map(op => <option value={op}>{op}</option>)
            }
        </select>
    </>
  )
}

export default OptionInput