import React from 'react'

export default function WhatCustomerSection() {
  return (
    <div>
        <div className='container mx-auto py-20 flex'>
            <div className='w-[40%]'>
                <div className='grid gap-6 mb-14'>
                    <h2 className='text-green-600 font-bold text-xl capitalize font-abc'>testimonials</h2>
                    <h1 className='font-bold text-4xl capitalize'>what customer saying <br /> about services</h1>
                </div>
                <div className='bg-[#F9F6F1] p-5 grid gap-12 rounded-md'>
                    <p className='text-xl font-bold'>
                        <span className='text-4xl'>"</span>lorem ipsum dolor sit lorem ipsum dolor sitlorem ipsum dolor sitlorem ipsum dolor sitlorem ipsum dolor sitlorem ipsum dolor sitlorem ipsum dolor sit lorem ipsum dolor sitlorem ipsum dolor sit <span className='text-4xl'>"</span>
                    </p>
                    <div className='flex justify-between items-center gap-2'>
                        <div className='flex justify-center items-center gap-2'>
                            <img className='w-36 rounded-full shadow-2xl' src="/img/what-customer-section/men-img.png" alt="" />
                            <div className='flex flex-col'>
                                <h2 className='text-3xl font-bold capitalize'>sohail</h2>
                                <p className='text-2xl uppercase'>uk</p>
                            </div>
                        </div>
                        <div>
                            <img className='w-28 bg-green-400 py-2 px-3 rounded-md ' src="/img/what-customer-section/five-star-icon.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-32 text-center flex flex-col justify-center items-center m-12'>
                <div className='bg-gray-500 text-white rounded-full w-6 text-center h-6'>1</div>
                <div className='bg-green-500 text-white rounded-full w-6 text-center h-6 my-3'>2</div>
                <div className='bg-gray-500 text-white rounded-full w-6 text-center h-6'>3</div>
            </div>
            <div className='w-[40%]'>
                <div>
                    <img className='' width={800} src="/img/what-customer-section/chiken.png" alt="img chiken" />
                </div>
                <div className='flex justify-end'>
                    <img width={120} src="/img/what-customer-section/egg-img.png" alt="img egg" />
                </div>
            </div>
        </div>
    </div>
  )
}
