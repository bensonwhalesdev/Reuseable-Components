import React from 'react'
import Checkbox1 from './CheckBox1'
import Checkbox2 from './CheckBox2'

const CheckBox = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-2 p-5 w-[95%] m-auto border-2 border-black">
        <Checkbox1 />
        <Checkbox2 />
    </div>
  )
}

export default CheckBox