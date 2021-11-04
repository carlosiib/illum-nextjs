import React from 'react'
import styles from '../../styles/SkewContent.module.css'

const SkewContent = ({ order, isFirstSkew, title, subtitle }) => {
  return (
    <>
      {
        isFirstSkew ?
          <div className="firstSkewContent" >
            <div>
              <h6>{title}</h6>
              <p>{subtitle}</p>
            </div>
          </div>
          :
          <div className={order === "img-text" ? "skewDescription img-text" : "skewDescription"}>
            <div className={styles.skewContent}>
              <h6>{title}</h6>
              <p>{subtitle}</p>
            </div>
            <div className={styles.skewImage}>

            </div>
          </div>

      }

    </>
  )
}

export default SkewContent
