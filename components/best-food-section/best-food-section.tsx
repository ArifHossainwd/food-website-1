import React from 'react'
import { Button } from '../ui/button'
import { FaArrowRight } from "react-icons/fa";

export default function BestFoodSection() {
  return (
    <div>
      <div className='container mx-auto py-20'>
        <div className='flex justify-between my-10 items-center gap-10'>
            <div>
            <img src="img/best-food-section/best-food-badam.png" alt="img" width="60" height="60"/>
            </div>
            <div className='text-center'>
                <h2 className='text-green-500 font-bold font-abc uppercase text-sx mb-4'>best food for family</h2>
                <h1 className='text-4xl font-bold capitalize'>choose your best category</h1>
            </div>
            <div className=''>
                <img src="img/best-food-section/best-food-shosha.png" alt="img" width="80" height="80"/>
            </div>
        </div>
        <div className='flex justify-around gap-5 mb-12'>
            <img className='rounded-md' src="img/best-food-section/best-food-1.png" alt="img" width="250" height="300"/>
            <img className='rounded-md' src="img/best-food-section/best-food-2.png" alt="img"  width="250" height="300"/>
            <img className='rounded-md' src="img/best-food-section/best-food-3.png" alt="img"  width="250" height="300"/>
            <img className='rounded-md' src="img/best-food-section/best-food-4.png" alt="img"  width="250" height="300"/>
            <img className='rounded-md' src="img/best-food-section/best-food-5.png" alt="img" width="250" height="300" />
        </div>
       
       <div className='flex justify-between gap-10 items-center'>
            <div>
                <img src="img/best-food-section/best-food-6.png" alt="img" width="600"/>
            </div>
           <div>
                <div className='text-center'>
                    <h2 className='text-green-500 font-bold font-abc uppercase text-sx mb-10'>best food for family</h2>
                </div>
                <div className='my-5'>
                    <h2 className='text-green-500 font-bold font-abc uppercase text-sx mb-4'>about company</h2>
                    <h2 className='text-green-500 font-bold font-abc uppercase text-sx mb-4'>best food for family</h2>
                    <h1 className='text-4xl font-bold capitalize'>we make sure quality & <br /> healthy foods</h1>
                </div>
                <div>
                    <p className='text-gray-500 capitalize'>conveys the commitment of the restaurant to prioritize both quality <br /> And health in their offerings. it implies that the recipe.</p>
                </div>
                <div className='flex gap-10 mt-5 mb-4 capitalize font-bold'>
                    <div>
                        <p>food otems management</p>
                        <p>customer feedback portal</p>
                    </div>
                    <div>
                        <p>table reservation</p>
                        <p>location-based service</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <Button className="bg-green-700 flex gap-2 uppercase">
                        see details
                        <FaArrowRight/>
                        </Button>
                    </div>
                    <div>
                        <img src="img/best-food-section/best-pata.png" alt="img" width="150" height="200"/>
                    </div>
                </div>
           </div>
       </div>
      </div>
    </div>
  )
}
