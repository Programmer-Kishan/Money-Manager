import Input from "../components/Input/Input"

const AddMoneyDetail = () => {
  return (
    <div>
        <Input label="Date" type="date" name="Date"/>
        <Input label="Amount" type="number" name="amount"/>
        <Input label="Description" type="text" name="ldesc"/>
    </div>
  )
}

export default AddMoneyDetail