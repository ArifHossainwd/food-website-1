import React from 'react'

export default function BestFoodMenu() {

    const OurTopis1 = [
        {
            ourImgSrc : "img/best-food-menu-section/best-food-menu-burger.png",
            text : "burger",
        },
        {
            ourImgSrc : "img/best-food-menu-section/best-food-menu-juice-biscuit.png",
            text : "juice & biscuit",
        },
        {
            ourImgSrc : "img/best-food-menu-section/best-food-kabab.png",
            text : "kabab",
        },
        {
            ourImgSrc : "img/best-food-menu-section/best-food-egg-parata.png",
            text : "egg parata",
        },
        {
            ourImgSrc : "img/best-food-menu-section/best-food-menu-chiken-soup.png",
            text : "chiken soup",
        },
    ]

    const OurTopis2 = [
        {
            OurTopis2Img : "img/best-food-menu-section/best-food-kabab.png",
            text1 : "mixed sabzi",
            description : "barbecue otalian cuisine gyro pasta",
            text3 : "4K reviews",
            price : "$46.43",
        },
        {
            OurTopis2Img : "img/best-food-menu-section/best-food-kabab.png",
            text1 : "chiken biryani",
            description : "american-inspired sushi roll",
            text3 : "4K reviews",
            price : "$35.32",
        },
        {
            OurTopis2Img : "img/best-food-menu-section/best-food-kabab.png",
            text1 : "chiken soup",
            description : "american-inspired sushi roll",
            text3 : "4K reviews",
            price : "$54.45",
        },
        {
            OurTopis2Img : "img/best-food-menu-section/best-food-kabab.png",
            text1 : "noodles",
            description : "barbecue otalian cuisine gyro pasta",
            text3 : "4K reviews",
            price : "$46.43",
        },
    ]
    const OurTopis3 = [
        {
            OurTopis2Img : "img/best-food-menu-section/best-food-kabab.png",
            text1 : "burger",
            description : "barbecue otalian cuisine gyro pasta",
            text3 : "4K reviews",
            price : "",
        },
        {
            OurTopis2Img : "img/best-food-menu-section/best-food-kabab.png",
            text1 : "parata chart",
            description : "barbecue otalian cuisine gyro pasta",
            text3 : "4K reviews",
            price : "$73.35",
        },
        {
            OurTopis2Img : "img/best-food-menu-section/best-food-kabab.png",
            text1 : "fruit chart",
            description : "barbecue otalian cuisine gyro pasta",
            text3 : "4K reviews",
            price : "$73.35",
        },
        {
            OurTopis2Img : "img/best-food-menu-section/best-food-kabab.png",
            text1 : "castard",
            description : "barbecue otalian cuisine gyro pasta",
            text3 : "4K reviews",
            price : "$65.65",
        }
    ]

  return (
    <div className='bg-[#F9F6F1]'>
      <div className='container h-auto py-20'>
        <div>
            <div className='text-center pb-10'>
                <h2 className='text-green-500 font-bold font-abc uppercase text-sx mb-4'>best food menu</h2>
                <h1 className='text-5xl font-bold capitalize'>our best foods menus</h1>
            </div>
            <div className='flex justify-center items-center gap-16'>
                {OurTopis1.map(({ourImgSrc,text}, i)=>(
                    <div className='' key={i}>
                        <img className='mx-auto' src={ourImgSrc} alt="img" width="50" height="50"/>
                        <h3 className='font-bold capitalize'>{text}</h3>
                    </div>
                ))}
            </div>
        </div>
       <div className='flex gap-10 pt-12'>
       <div className='pt-12 w-[50%]'>
                    {OurTopis2.map(({OurTopis2Img, text1, description, text3, price}, i)=>(
                        <div  key={i}>
                            <div className='py-10 flex gap-8 items-center bg-white pr-4 '>
                                <div>
                                    <img src={OurTopis2Img} alt="img" width={100} height={100}/>
                                </div>
                                <div className='w-full'>
                                    <h2 className='font-bold text-2xl'>{text1}</h2>
                                    <h4 className='py-2 text-gray-500 font-bold'>{description}</h4>
                                    <p className='text-gray-500 font-bold text-center'>{text3}</p>
                                </div>
                                <div className='bg-[#BEFFBD] py-1 px-2 rounded-md font-bold text-[#05A056]'>
                                    <h5>{price}</h5>
                                </div>
                            </div>
                        
                        </div>
                    ))}
            </div>
            <div className='pt-12 w-[50%]'>
                    {OurTopis2.map(({OurTopis2Img, text1, description, text3, price}, i)=>(
                        <div key={i}>
                            <div className=' py-10 flex gap-2 items-center bg-white pr-4 '>
                                <div>
                                    <img src={OurTopis2Img} alt="img" width={100} height={100}/>
                                </div>
                                <div className='w-full'>
                                    <h2 className='font-bold text-2xl'>{text1}</h2>
                                    <h4 className='py-2 text-gray-500 font-bold'>{description}</h4>
                                    <p className='text-gray-500 font-bold text-center'>{text3}</p>
                                </div>
                                <div>
                                    <h5 className='bg-[#BEFFBD] py-1 px-2 rounded-md font-bold text-[#05A056]'>{price}</h5>
                                </div>
                            </div>
                        
                        </div>
                    ))}
            </div>
       </div>
      </div>
    </div>
  )
}

