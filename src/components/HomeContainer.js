import React from 'react';
import { heroData } from '../utils/data';
import bike from "./img/delivery.png"
import HeroBg from "./img/heroBg.png"
import I1 from "./img/i1.png"

const HomeContainer = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2' id="home">
           <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
                <div className='flex items-center gap-2 justify-center bg-blue-100 px-4 py-1 rounded-full'>
                    <p className='text-base text-blue-500 font-semibold'>Bike Delivery</p>
                    <div className='w-8 h-8 rounded-full overflow-hidden drop-shadow-xl'>
                        <img className='w-full h-full object-contain bg-white' src={bike} alt="" />
                    </div>
                </div>
                <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>The Fastest Delivery in <span className='text-blue-600 text-[3rem] lg:text-[5rem]'>Your City</span>
                </p>
                <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, tempore alias. Sed ipsam quibusdam eveniet incidunt! Consequatur, unde. Voluptatem, harum.
                </p>
                
                <button type='button' className='bg-gradient-to-br from-blue-400 to-blue-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>order Now</button>
           </div>
           <div className='py-2 flex-1 flex items-center relative'>
                <img className='ml-auto h-420 w-full lg:w-auto lg:h-650 ' src={HeroBg} alt="" />
                <div className='w-full h-full absolute top-0 left-0 items-center justify-center py-4 gap-2 flex flex-wrap'>
                {heroData && heroData.map((n)=>(
                   <div key={n.id} className='lg:w-225  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
                     <img className='w-20 lg:w-40 -mt-10 lg:-mt-30' src={n.imageSrc} alt="" />
                     <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>
                      {n.name}</p>
                     <p className='text-[10px] lg:text-sm font-semibold text-lighttextGray my-1 lg:my-3'>{n.decp}</p>
                     <p className="text-sm font-semibold text-headingColor">
                    <span className="text-xs text-red-600">$</span>{n.price}
                    </p>
                 </div>
                   ))}
                </div>
           </div>
        </section>
        
    );
};

export default HomeContainer;