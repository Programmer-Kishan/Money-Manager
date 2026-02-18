import Input from "../components/Input/Input"
import OptionInput from "../components/Input/OptionInput"

import { SourceList, ShortDescList, TypeList } from "../assets/OptionList"



const AddMoneyDetail = () => {
  return (
    <div>
        <Input label="Date" type="date" name="Date"/>
        <Input label="Amount" type="number" name="amount"/>
        <Input label="Description" type="text" name="ldesc"/>
        <OptionInput label="Source" name="source" options={SourceList} />
        <OptionInput label="Amount Description" name="amtdesc" options={ShortDescList} />
        <OptionInput label="Type" name="type" options={TypeList} />
    </div>
  )
}

export default AddMoneyDetail