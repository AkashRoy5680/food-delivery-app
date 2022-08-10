import React from 'react'
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";
import bike from "./img/delivery.png"

const RowContainer=({flag})=> {
  return (
    <div className={`w-full flex items-center gap-3  my-12 scroll-smooth  ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}>
        <div className='w-300 md:w-340 h-auto rounded-lg p-2 my-12 backdrop-blur-lg'>
            <div className='w-full flex items-center justify-between'>
            <motion.div
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <img
                  src={bike}
                  alt=""
                  className="w-full h-full object-contain"
                />
            </motion.div>
            <motion.div
            whileTap={{scale:0.75}}
            className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow:md" 
            >
            <MdShoppingBasket className="text-white"/>
            </motion.div>
            </div>

            <div className='w-full flex flex-col items-end justify-end'>
            <p className='text-textColor font-semibold text-base md:text-lg '>Chocolate & Vanilla</p>
            <p className='mt-1 text-sm text-gray-500'>45 calories</p>
            <div className='flex items-center gap-8 '>
                <p className='text-lg text-headingColor font-semibold'>
                    <span className='text-sm text-red-500'>$</span>5.25
                </p>
            </div>
            </div>
        </div>
      </div>
  )
}


export default RowContainer
