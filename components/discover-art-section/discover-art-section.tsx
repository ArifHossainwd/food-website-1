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
    <div className='container ax-auto'>
      <div className='flex py-20'>
            <div className='w-[25%]'>
                    <div>
                        <img src="img/discover-art-section/podina-pata.png" alt="discover img" width={60} height={60}/>
                    </div>
                    <div>
                        <h2>why chppse us</h2>
                        <h1>discover art of food with us.</h1>
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
           <div className='w-[75%]'>
                <div className='w-[25%]  flex justify-between'>
                        {doscoverArtTopic.map(({imgSrc, h2, p}, i)=>(
                            <div key={i}>
                                <img src={imgSrc} alt="img" />
                                <h2>{h2}</h2>
                                <p>{p}</p>
                            </div>
                        ))}
                </div>
           </div>
      </div>
    </div>
  )
}
