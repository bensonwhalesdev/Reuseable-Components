import React from 'react'
import Grid1 from './Grid1'
import Grid2 from './Grid2'

const Grid = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-2 p-5 w-[95%] m-auto border-2 border-black">
        <div className='border-2 border-black p-3'>
            <h1>First Grid</h1>
            <Grid1 />
        </div>

        <div className='border-2 border-black p-3'>
            <h1>Second Grid</h1>
             <Grid2 />
        </div>
    </div>
  )
}

export default Grid