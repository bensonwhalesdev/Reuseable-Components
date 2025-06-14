import React from 'react'
import Radio1 from './Radio1'
import Radio2 from './Radio2'
import Radio3 from './Radio3'
import Radio4 from './Radio4'
import Radio5 from './Radio5'

const Radio = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-2 p-5 w-[95%] m-auto border-2 border-black">
        <Radio1 />
        <Radio2 />
        <Radio3 />
        <Radio4 />
        <Radio5 />
    </div>
  )
}

export default Radio