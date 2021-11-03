import React from 'react'

const Banner = ({ title, subtitle, path, alt, width, height }) => {
  return (
    <div>

      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div>
        <img src={path} alt={alt} width={width} height={height} />
      </div>

    </div>
  )
}

export default Banner
