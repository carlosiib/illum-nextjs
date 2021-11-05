import React from 'react'

const Testimonial = ({ data }) => {
  return (
    <div className="swiper-slide">
      <blockquote >{data.excerpt}</blockquote>
      <div className="avater-info">
        <p>{data.name}</p>
        <span>{data.designation}</span>
      </div>

    </div>
  )
}

export default Testimonial
