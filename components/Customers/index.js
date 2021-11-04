import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Brand from '../Brand'
import CustomersData from '../../public/data/customers.json'
import 'swiper/css'


const Customers = () => {
  const swiperOption = {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 2000,
    },
    slidesPerView: 6,
    spaceBetween: 0,
    pagination: false,
    navigation: false,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 3,
      },

      // when window width is >= 640px
      992: {
        slidesPerView: 6,
      },
    },
  };

  return (
    <div className="customersContainer">
      <h6 >Some of our customers</h6>
      <div>
        <Swiper {...swiperOption}>
          {CustomersData[0].customers &&
            CustomersData[0].customers.map((single, key) => {
              console.log(single)
              return (
                <SwiperSlide key={key}>
                  <Brand key={key} data={single} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  )
}

export default Customers
