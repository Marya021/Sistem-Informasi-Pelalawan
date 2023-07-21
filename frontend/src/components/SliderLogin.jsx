import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { slide1, slide2, slide3, slide4 } from '../img';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';



const SliderLogin = () => {
  return (
    <div className='h-[50vh]'>
      <Swiper
      navigation={true}
       modules={[Pagination , Autoplay, Navigation]}
      className='h-full'
      autoplay
      loop
      pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={slide1} alt="" className='w-full h-screen '/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" className='w-full h-screen'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" className='w-full h-screen'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" className='w-full h-screen'/>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default SliderLogin