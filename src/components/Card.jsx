import React from 'react'
import { FiFileText } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";

const Card = () => {
  return (
        <div className=' relative w-60 h-80 bg-zinc-900 rounded-[20px] text-white p-5  overflow-hidden  py-10'>
            <FiFileText />
            <p className='test-ms mt-5 font-semibold leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className='footer absolute bottom-0 w-full pt-3 pb-0 left-0'>
  <div className='flex items-center justify-between mb-3 pt-3 pb-0 px-8'>
    <h5>.4mb</h5>
    <span className='w-7 h-7 rounded-full flex items-center justify-center bg-zinc-600'>
      <MdOutlineFileDownload size={".8em"} color="#fff" />
    </span>
  </div>
  <div className='tag w-full py-4 bg-green-500'>
    <h3 className='text-xl'>Download Now</h3>
    </div>
</div>

        </div>   
  ) 
}

export default Card