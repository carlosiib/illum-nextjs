import React from 'react'
import styles from '../../styles/Banner.module.css'

const Banner = ({ title, subtitle, path, alt, width, height }) => {
  return (
    <section>
      <div className={styles.bannerContainer}>
        <div className={styles.firstCol}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
        <div className={styles.secondCol}>
          <img src={path} alt={alt} width={width} height={height} loading="lazy" />
        </div>
      </div>
    </section>
  )
}

export default Banner
