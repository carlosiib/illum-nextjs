import React from 'react'

const Brand = ({ data }) => {
  return (
    <div >
      <img src={data.image} alt={data.alt} width={data.width} height={data.height} />
    </div>
  )
}

export default Brand
