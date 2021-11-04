import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from '../../styles/StartAcademy.module.css'

const StartAcademyDesktop = () => {
  const [currentContent, setCurrentContent] = useState("Instructors")
  const [isSelected, setIsSelected] = useState(false)

  // Intersection observer Hook for animations
  const { ref, inView } = useInView()
  const animation = useAnimation()

  useEffect(() => {
    setIsSelected(true)
  }, [])

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        pathLength: 1,
        transition: {
          duration: 2,
          ease: "easeInOut"
        }
      })
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        pathLength: 0,
      })
    }

  }, [inView, animation])


  function handlePathContent(e) {
    const selectedContent = e.target.dataset.contentFor
    console.log(selectedContent)
    setCurrentContent(selectedContent)
    setIsSelected(true)
  }

  return (
    <div className={styles.startAcademyContainer}>

      <div className={styles.buttonRow}>
        <motion.button
          whileHover={{
            scale: 1.04,
            transition: {
              type: "spring",
              stiffness: 1000,
            }
          }}>
          Start your own Academy
          <img
            src="/svg/btn-checkmark.svg"
            alt="Start your own Academy checkmark"
            width="16"
            height="18"
            className={styles.btnImage}
          />
        </motion.button>
      </div>

      <div className={styles.svgsRow}>
        <motion.div>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="1040"
            height="100"
            viewBox="0 0 800 97"
            fill="none"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M581 0V39.2718C581 42.0332 578.761 44.2718 576 44.2718H548.416H5.99999C3.23857 44.2718 1 46.5104 1 49.2718V97"
              stroke={isSelected && currentContent === "Content Managers" ? "#52b56b" : "#3f85ca"}
              strokeWidth="3"
              animate={animation}
            />
          </motion.svg>
        </motion.div>


        <motion.div>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="1058"
            height="100"
            viewBox="0 0 5 100"
            fill="none"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M225 0V63.1592C225 65.9206 222.761 68.1592 220 68.1592H5.99999C3.23857 68.1592 1 70.3978 1 73.1592V100"
              stroke={isSelected && currentContent === "Learners" ? "#52b56b" : "#3f85ca"}
              strokeWidth="3"
              animate={animation}
            />
          </motion.svg>
        </motion.div>

        <motion.div>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="1060"
            height="113"
            viewBox="-380 10 300 99"
            fill="none"
            initial="hidden"
            animate="visible"

          >
            <motion.path
              d="M1 0V62.1608C1 64.9222 3.23858 67.1608 6 67.1608H106C108.761 67.1608 111 69.3994 111 72.1608V99"
              stroke={isSelected && currentContent === "Instructors" ? "#52b56b" : "#3f85ca"}
              strokeWidth="3"
              animate={animation}
            />
          </motion.svg>
        </motion.div>
      </div>

      {/* PATH BUTTONS */}
      <div className={styles.pathButtons}>
        <button
          onClick={handlePathContent}
          data-content-for="Content Managers"
          className={isSelected && currentContent === "Content Managers" ? "path-main-btn" : "path-sec-btn"}
        >
          For Content Managers
          <img
            src="/svg/btn-code.svg"
            alt="Content Managers terminal"
            width="20"
            height="20"
            className={styles.btnImage}
          />
        </button>
        <button
          onClick={handlePathContent}
          data-content-for="Learners"
          className={isSelected && currentContent === "Learners" ? "path-main-btn" : "path-sec-btn"}>
          For Learners
          <img
            src="/svg/btn-book.svg"
            alt="Book Learners path"
            width="16"
            height="18"
            className={styles.btnImage}
          />
        </button>
        <button
          onClick={handlePathContent}
          data-content-for="Instructors"
          className={isSelected && currentContent === "Instructors" ? "path-main-btn" : "path-sec-btn"}
        >
          For Instructors
          <img
            src="/svg/btn-instructor.svg"
            alt="Instructor path"
            width="20"
            height="20"
            className={styles.btnImage}
          />
        </button>
      </div>

      {/* PATH CONTENT */}
      <div className={styles.pathContent} ref={ref}>
        Lorem trolling
      </div>

    </div>
  )
}

export default StartAcademyDesktop
