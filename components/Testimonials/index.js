import React from 'react'
import Testimonial from '../Testimonial'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import TestimonialsData from '../../public/data/testimonials.json'
import styles from '../../styles/Testimonials.module.css'
import 'swiper/css'

SwiperCore.use([Navigation]);

const Testimonials = () => {
  const swiperOption = {
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".testimonial-carousel .swiper-button-next",
      prevEl: ".testimonial-carousel .swiper-button-prev",
    },
  };

  return (
    <section>
      <div className={styles.testimonialsContainer}>
        <div className="testimonial-carousel">
          <div className="swiper-button-prev">
            <span className={styles.swiperPrev} ></span>
          </div>
          <Swiper className={styles.testimonialsQuote} {...swiperOption}>
            {TestimonialsData[0].testimonial &&
              TestimonialsData[0].testimonial.map(
                (single, key) => {
                  return (
                    <SwiperSlide key={key}>
                      <Testimonial
                        key={key}
                        data={single}
                      />
                    </SwiperSlide>
                  );
                }
              )}
          </Swiper>
          <div className="swiper-button-next">
            <span className={styles.swiperNext} ></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
