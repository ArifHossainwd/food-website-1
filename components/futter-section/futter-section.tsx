import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";
import { BiLogoWhatsapp } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

export default function FutterSection() {
  return (
    <div className='bg-black/95'>
        <div className='container mx-auto  text-white py-12'>
            <div className='flex gap-10'>
                <div className='w-[30%] grid gap-8'>
                    <div className='grid gap-4'>
                        <h1 className='text-3xl font-bold'>about restaurant</h1>
                        <hr className='w-24 '/>
                    </div>
                    <div className='text-gray-400'>
                        Quickly supply alternative strategic theme areas vis-a-vis B2C mindshare. Objectively repurpose stand-alone synergy via user-centric architectures.
                    </div>
                    <div className='flex items-center gap-2'>
                       <div className='bg-gray-800 p-3 rounded-full'>
                             <FaFacebookF className='text-xl' />
                       </div>
                       <div className='bg-gray-800 p-3 rounded-full'>
                            <IoLogoTwitter  className='text-xl' />
                       </div>
                       <div className='bg-gray-800 p-3 rounded-full'>
                       <TiSocialLinkedin className='text-xl' />
                       </div>
                       <div className='bg-gray-800 p-3 rounded-full'>
                       <BiLogoWhatsapp className='text-xl'/>
                       </div>
                    </div>
                </div>
                <div className='w-[20%]'>
                    <div className='grid gap-4 mb-8'>
                        <h1 className='text-3xl font-bold'>our menu</h1>
                        <hr className='w-24 '/>
                    </div>
                    <div className='grid gap-5 text-gray-400'>
                        <div className='flex items-center gap-2'>
                            <FaChevronRight />
                            <h2>Chicken Barger</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaChevronRight />
                            <h2>Brief Pizza
                            </h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaChevronRight />
                            <h2>Fresh Vegetable</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaChevronRight />
                            <h2> Sea Foods
                            </h2>
                        </div>
                        <div className='flex items-center gap-2'>
                             <FaChevronRight />
                             <h2>Indian Kabab</h2>
                        </div>
                    </div>
                </div>
                <div className='w-[25%]'>
                    <div className='grid gap-4 mb-8'>
                        <h2 className='text-3xl font-bold'>Recent Posts</h2>
                        <hr className='w-24 '/>
                    </div>
                    <div className='grid gap-5'>
                        <div className='flex justify-center items-center gap-3'>
                            <div>
                                <img width={170} className='rounded-md' src="/img/futter-section/best-food-2.png" alt="fitter img" />
                            </div>
                            <div className='grid gap-3'>
                                <div>
                                     <h2 className='font-bold text-sm'>10 Reasons To Do A Digital Detox Challenge
                                </h2>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <FaCalendarAlt  className='text-sm text-green-600'/>
                                    <span className='text-xs text-gray-400'>21 June, 2023
                                    </span>
                                </div>
                            </div>
                        </div>
                       <div>
                         <div  className='flex justify-center items-center gap-3'>
                                <div>
                                     <img width={170} className='rounded-md'  src="/img/futter-section/best-food-2.png" alt="fitter img" />
                                </div>
                               <div>
                               <div className='pb-3'>
                                     <h2 className='font-bold text-sm'>New Restaurant Town Our Ple Award Contract </h2>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <FaCalendarAlt  className='text-sm text-green-600'/>
                                    <span className='text-xs text-gray-400'>22 June, 2023 </span>
                                </div>
                               </div>
                            </div>
                       </div>
                    </div>
                    <div></div>
                </div>
                <div className='w-[25%]'>
                    <div className='grid gap-4 mb-8'>
                        <h2 className='text-3xl font-bold'>Subscribe Now
                        </h2>
                        <hr className='w-24 '/>
                    </div>
                    <div>
                        <p className='text-gray-400 mb-7'>Subscribe Our newsletter to get our Latest Update & News</p>
                    </div>
                    <div className='flex items-center'>
                        <input className='h-12 w-[80%] px-3 bg-gray-900 rounded-l-md' type="text"  placeholder='Enter Email'/>
                        <div className='bg-green-600 h-12 grid place-content-center w-[20%] rounded-r-md'>
                            <FaTelegramPlane/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-black  '>
            <div className='container text-white py-8 flex justify-between'>
                <div>
                    <p className='text-gray-400'>Copyright © 2023 ABCDEF All Rights Reserved</p>
                </div>
                <div>
                    <p  className='text-gray-400'>Privacy Policy | Terms & Condition</p>
                </div>
            </div>
        </div>
    </div>
  )
}
