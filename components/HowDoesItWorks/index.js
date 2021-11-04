import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import SkewContent from '../SkewContent'
import styles from '../../styles/HowDoesItWorks.module.css'

const HowDoesItWorks = () => {
  const config = {
    change: false,
    options: {}
  }

  // Intersection observer Hook for animations
  const { ref, inView } = useInView()
  const imageAnimation = useAnimation()

  const [animateStep, setAnimateStep] = useState(config)

  useEffect(() => {
    const { change, options } = animateStep

    if (change) {
      imageAnimation.start({
        x: (options.step * 1) % 2 == 0 ? "50%" : "0%",
        opacity: 1,
        transition: {
          ease: [0.17, 0.67, 0.83, 0.67],
          type: "spring",
          bounceDamping: .25
        }
      })

      const changedPathImg = document.querySelector(".changed-path-img")
      if (options.step == "1") {
        changedPathImg.src = "/svg/skew-grader-console.svg"
      }
      if (options.step == "2") {
        changedPathImg.src = "/svg/skew-assignment-list.svg"
      }
      if (options.step == "3") {
        changedPathImg.src = "/svg/skew-correct-assignment.svg"
      }
      if (options.step == "4") {
        changedPathImg.src = "/svg/skew-user-tasks.svg"
      }
    }

  }, [inView, animateStep, imageAnimation])

  function handleDownAnimation(options) {
    setAnimateStep({ change: true, options })
  }

  return (
    <div className={styles.howDoesItWorks}>
      <h5>How Does Illumidesk Work?</h5>

      <div className={styles.skewContainer} >

        <motion.div animate={imageAnimation} className="sticky-img">
          <img
            src="/svg/skew-dashboard.svg"
            alt="Illumidesk main console dashboard"
            width="540"
            height="429"
          />
          <img
            className="changed-path-img"
            src="/svg/skew-grader-console.svg"
            alt="Illumidesk console grader dashboard"
          />
        </motion.div>



        {/* PATH CONTENT 1 */}
        <SkewContent
          isFirstSkew={true}
          order="img-text"
          title="Set up your Course files as an Instructor"
          subtitle="Register and sign in to IllumiDesk, access your grader notebook and create or import your course files. If you have an LTI compatible LMS then all data is synched transparently!"
          stepNumber="1"
          thresholdAt="1"
          downAnimation={(direction) => handleDownAnimation(direction)}
        />
        <div ref={ref}>
          {/* PATH CONTENT 2 */}
          <SkewContent
            isFirstSkew={false}
            order="text-img"
            title="Fetch, complete and submit modules as a Student"
            subtitle="With the click of a button fetch assignments for course and engage with live, interactive content. If required, complete submit the assignment, quiz or test for review."
            stepNumber="2"
            thresholdAt="0.8"
            downAnimation={(direction) => handleDownAnimation(direction)}
          />

          {/* PATH NUMH CONTENT 3 */}
          <SkewContent
            isFirstSkew={false}
            order="img-text"
            title="Review, Grade, and add Feedback as an Instructor"
            subtitle="Once the student has submitted their assignment, Instructors have the option to initiate automated grading and provide inline feedback for their students. Then, Instructors have the option to release feedback to students and submit scores to the LMS."
            stepNumber="3"
            thresholdAt="0.8"
            downAnimation={(direction) => handleDownAnimation(direction)}
          />

          {/* PATH NUMH CONTENT 4 */}
          <SkewContent
            isFirstSkew={false}
            order="text-img"
            title="Sync data with your Learning Management System"
            subtitle="Synchronize your data, such as users, groups and grades with your Learning Management System."
            stepNumber="4"
            thresholdAt="0.8"
            downAnimation={(direction) => handleDownAnimation(direction)}
          />
        </div>
      </div>

    </div>
  )
}

export default HowDoesItWorks
