import React from 'react'
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
import Form4 from './Form4'
import Form5 from './Form5'
import Form6 from './Form6'

const Forms = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-2 p-5 w-[95%] m-auto border-2 border-black">
        <Form1 />
        <Form2 />
        <Form3 />
        <Form4 />
        <Form5 />
        <Form6 />
    </div>
  )
}

export default Forms