import React from 'react'
import { Button } from '../ui/button'
import { FaArrowRight } from "react-icons/fa";

export default function DiscoverArtSection() {

    const doscoverArtTopic = [
        {
            imgSrc : "img/discover-art-section/table-reservation.png",
            h2 : "table reservation",
            p : "guarantee your spot, and enjoy a hassle-free dinning experiaence with our",
 
        },
        {
            imgSrc : "img/discover-art-section/online-order.png",
            h2 : "online oder",
            p : "oder online and savor the delisous flavors from the comfort of home ",
      
        },
        {
            imgSrc : "img/discover-art-section/quality-food.png",
            h2 : "quality foods",
            p : "praesent rutrum ligula ligula, aget viverra neque congue sed. donec",
        
        },
    ]

  return (
    <div className='container ax-auto bg-[#FFFFFF]'>
      <div className='flex justify-center items-center py-20'>
            <div className=' pr-10 grid gap-3'>
                    <div>
                        <img src="img/discover-art-section/podina-pata.png" alt="discover img" width={60} height={60}/>
                    </div>
                    <div className='grid gap-2'>
                        <h2 className='text-green-600 font-bold font-abc'>why chppse us</h2>
                        <h1 className='text-4xl font-bold'>discover art of food with us.</h1>
                    </div>
                    <div>
                        <p>embark on a journmy of culinary exploretion doscover the art of good food with us. our passion</p>
                    </div>
                    <div>
                            <Button className="bg-green-700 flex gap-2 uppercase">
                                about more
                                <FaArrowRight/>
                            </Button>
                    </div>
            </div>
           <div >
                <div className='flex gap-10'>
                    {doscoverArtTopic.map(({imgSrc, h2, p}, i)=>(
                        <div className='bg-[#FFFFFF] shadow-md p-10 grid gap-3 rounded-md' key={i}>
                            <img src={imgSrc} alt="img" width={50} height={50}/>
                            <h2 className='text-2xl font-bold'>{h2}</h2>
                            <p className='text-gray-500'>{p}</p>
                        </div>
                    ))}
                </div>
           </div>
      </div>
      
      <div className='grid gap-4'>
            <div className='flex justify-center items-center gap-4'>
                <img src="/img/discover-art-section/discover-img-1.jpg" alt="img" width={300}/>
                <img src="/img/discover-art-section/discover-img-2.jpg" alt="img"  width={300}/>
                <img src="/img/discover-art-section/discover-img-3.png" alt="img"  width={300}/>
                
            </div>
            <div className='flex justify-center items-center gap-4'>
                <img src="/img/discover-art-section/discover-img-5.png" alt="img"  width={300}/>
                <img src="/img/discover-art-section/discover-img-4.png" alt="img"  width={300}/>
         
            </div>
      </div>
    </div>
  )
}
