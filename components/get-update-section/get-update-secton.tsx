import React from 'react'
import { FaCalendarDays } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";

export default function GetUpdateSecton() {


    const getUpdateTopis = [
        {
            bgImgSrc : 'img/get-update-section/best-food-2.png',
            h1 : 'innovative hot chessy raw pasta make.',
            buttonText : 'read more' 
        },
        {
            bgImgSrc : 'img/get-update-section/best-food-2.png',
            h1 : 'new restaurant town our ple award',
            buttonText : 'read more' 
        },
        {
            bgImgSrc : 'img/get-update-section/best-food-2.png',    
            h1 : 'best hot chessy raw in pasta makeing.',
            buttonText : 'read more' 
        },
    ]

  return (
    <div className='container mx-auto'>
        <div className='mb-36'>
            <div className='text-center mb-10'>
                <h2 className='text-green-600 font-bold font-abc text-xl'>blog & news</h2>
                <h1 className='text-4xl font-bold pt-8 capitalize'>get update our foods</h1>
            </div>
            <div className='flex justify-between items-center'>
                {getUpdateTopis.map(({bgImgSrc, h1, buttonText}, i)=>(
                    <div className='relative w-[300px] h-[250px' key={i}>
                        <img className='w-full h-auto rounded-md' src={bgImgSrc} width={100} alt="img" />
                        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 capitalize shadow-lg bg-white p-3 w-[90%] rounded-md'>
                            <div className='flex justify-between items-center pb-3'>
                                <div className='flex items-center gap-1'>
                                <FaCalendarDays className='text-green-600'/>
                                <p className='text-xs font-bold'>18 june, 2023</p>
                                </div>
                               <span className='border h-5'></span>
                                <div className='flex items-center gap-1'>
                                <LuMessagesSquare className='text-green-600'/>
                                <p className='text-xs font-bold'>3 comments</p>
                                </div>
                            </div>
                            <h2 className='text-xl font-bold pb-3'>{h1}</h2>
                            <hr />
                            <button className='mt-3 uppercase font-bold'>read more</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
