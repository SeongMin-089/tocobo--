import React from 'react'
import skincare from '../util/skincare'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './styles/SkinCare.scss'
const SkinCare = () => {
  return (
    <div className='inner skincare-inner'>
      <div className="t-wrap">
        <h2 className="tit">
          Let’s stay in touch
        </h2>
        <p className="txt">
          ​Sign up to our newsletter so we can welcome you <br />
          to the Diptyque community and keep you posted on <br />
          new launches, events, special offers and more. 
        </p>
        <a href="#" className="btn">
          • MEET Diptyque •
        </a>
      </div>
      <div className="slider-wrap">
        <div className="in">
          <Swiper 
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          className="skincare-slider">
            {skincare.map((sl)=>(

            <SwiperSlide 
            style={{backgroundImage:`url(${sl.image})`}}
            key={sl.id} >
              <a href={sl.link}>
              {sl.id}
              </a>
            </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default SkinCare