import React, { useRef } from 'react'
import tick from '../assets/tick-box.png'
import notick from '../assets/box.png'
import del from '../assets/delete.png'


const Todo = ({text}) => {

  return (
    <div className='flex items-center h-[10px] mt-15 w-[635px]'>
        <div className='flex flex-1 items-center cursor-pointer gap-2'>
            <img src={tick} alt="" className='w-[30px]'/>
            <p className='text-[20px] mt-[6px] text-[#F2F2F2] font-[monospace]'>{text}</p>
        </div>

    <img src={del} alt="" className='w-[30px] cursor-pointer '/>    



    </div>
  )
}

export default Todo