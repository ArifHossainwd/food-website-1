
import Image from 'next/image'
import { title } from 'process'

export default function OurServiceSection() {

    const topics = [
        {
            imgSrc : "img/our-service-section/our-secvice-section-cauliflower.png",
            title : "fast foods",
            desc : "100% natural fast foods",
        },
        {
            imgSrc : "img/our-service-section/our-service-section-track.png",
            title : "home delivery",
            desc : "free home delivery by $50",
        },
        {
            imgSrc : "img/our-service-section/our-service-section-event-party.png",
            title : "event & party",
            desc : "100% natural fast foods"
        },
        {
            imgSrc : "img/our-service-section/our-service-section-costing.png",
            title : "low costing",
            desc : "by prioritizing efficiency"
        },
    ]

  return (
    <div className=' bg-black mx-auto'>
      <div className=' container grid grid-cols-4 gap-4 place-content-center h-96'>
        {topics.map(({imgSrc, title, desc},  i)=>(
          <div className="mx-auto" key={i}>
            <div className=''>
              <img src={imgSrc} width={100} height={100} alt="img" />
            </div>
            <div>
            <h2 className='text-white py-4 font-boldu capitalize text-xl'>{title}</h2>
            <p className='text-gray-500 text-sx'>{desc}</p>
            </div>
          </div>
          ))}
      </div>
    </div>
  )
}
