import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from '../../styles/SkewContent.module.css'

const SkewContent = ({ order, isFirstSkew, title, subtitle, thresholdAt = 1, stepNumber, downAnimation }) => {

  // Intersection observer Hook for animations
  const { ref, inView } = useInView({ threshold: thresholdAt * 1 })

  useEffect(() => {
    if (inView) {
      downAnimation({ step: stepNumber })
    }
  }, [inView, stepNumber])

  return (
    <>
      {
        isFirstSkew ?
          <div ref={ref} className="firstSkewContent" >
            <div>
              <h6>{title}</h6>
              <p>{subtitle}</p>
            </div>
          </div>
          :
          <div ref={ref} className={order === "img-text" ? "skewDescription img-text" : "skewDescription"}>
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
