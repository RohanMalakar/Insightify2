
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import Card from './Card';

export default function CardSlider({team}) {
   

  let settings = {
    dots: true,
    infinite: true ,
    speed: 600,
    slidesToShow:1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000,
    easing:"ease-in-out",
  }
  
  return (
    <div className='w-[100%] m-auto pt-5 bg-slate-200'>
      <Slider {...settings} className='w-[90%] m-auto'>
      {team.map(member =>{
        return < Card key={member} member={member}/>
      })}
     </Slider>

    </div>
  )
}
