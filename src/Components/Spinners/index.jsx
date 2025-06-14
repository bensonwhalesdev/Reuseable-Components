import React from 'react'
import Spinner1 from './Spinner1'
import Spinner2 from './Spinner2'
import Spinner3 from './Spinner3'
import Spinner4 from './Spinner4'
import Spinner5 from './Spinner5'
import Spinner6 from './Spinner6'
import Spineer7 from './Spinner7'
import Spinner8 from './Spinner8'
import Spinner9 from './Spinner9'

const Spinners = () => {
  return (
    <div  className="flex flex-wrap gap-2 mt-2 p-5 w-[95%] m-auto border-2 border-black">
      <Spinner1 />
      <Spinner2 />
      <Spinner3 />
      <Spinner4 />
      <Spinner5 />
      <Spinner6 />
      <Spineer7 />
      <Spinner8 />
      <Spinner9 />
    </div>
  )
}

export default Spinners