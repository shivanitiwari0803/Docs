import React from 'react';
import { FiFileText } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from 'react-icons/io5';
import { motion } from "framer-motion";

const Card = ({ data ,reference }) => {
  return (
    <motion.div drag dragConstraints={reference}whileDrag={{scale:1}} dragElastic={.1} dragTransition={{bounceStiffness :600 ,bounceDamping :10}}
     className='relative w-60 h-80 bg-zinc-900 rounded-[20px] text-white p-5 overflow-hidden py-10 flex-shrink-0'>
      <FiFileText size={20} />

      <p className='text-sm mt-5 font-semibold leading-tight'>
        {data.desc}
      </p>

      <div className='footer absolute bottom-0 w-full pt-3 pb-0 left-0'>
        <div className='flex items-center justify-between mb-3 pt-3 pb-0 px-5'>
          <h5 className='text-xs text-zinc-400'>{data.filesize}</h5>
          <span className='w-7 h-7 rounded-full flex items-center justify-center bg-zinc-600'>
            {data.close ? (
              <IoClose size={14} />
            ) : (
              <MdOutlineFileDownload size={14} color="#fff" />
            )}
          </span>
        </div>

        {data.tag.isopen && (
          <div
            className={`tag w-full py-3 ${
              data.tag.tagcolor === 'blue'
                ? 'bg-blue-600'
                : data.tag.tagcolor === 'green'
                ? 'bg-green-600'
                : 'bg-gray-600'
            } flex items-center justify-center transition-all`}
          >
            <h3 className='text-sm font-semibold text-white'>
              {data.tag.tagtitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
