import React from 'react'
import { Button } from '../ui/button'

export default function HeroSection() {
  return (
   <div className="bg-cover w-[100%] bg-center h-[100vh] bg-[url('/img/home-section/hero-bg-img.jpg')]">
      <div className='container h-full flex items-center'>
        <div className='mx-auto w-[75%] bg-white/50 p-5 rounded-md '>
          <h3 className='font-abc text-green-600 text-2xl'>special fast food</h3>
          <h1 className='text-5xl font-bold uppercase py-4'>kings of <br /> quality food</h1>
          <p className='text-gray-500 pb-3 text-xl'>offering an unrivaled selection of mouthwatering favorites <br /> served with speed and quality</p>
          <div>
          <Button className='bg-green-700 uppercase text-xs'>explore minu</Button>
          </div>
        </div>
      </div>
   </div>
  )
}
