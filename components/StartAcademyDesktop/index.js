import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/StartAcademy.module.css'

const StartAcademyDesktop = () => {
  const [currentContent, setCurrentContent] = useState("Instructors")
  const [isSelected, setIsSelected] = useState(false)

  function handlePathContent(e) {
    const selectedContent = e.target.dataset.contentFor
    console.log(selectedContent)
    setCurrentContent(selectedContent)
    setIsSelected(true)
  }

  return (
    <div className={styles.startAcademyContainer}>

      <div className={styles.buttonRow}>
        <button>
          <span className={styles.btnText}>Start your own Academy</span>
          <Image
            src="/svg/btn-checkmark.svg"
            alt="Checkmark icon"
            width={16}
            height={18}
            className={styles.btnImage}
          />
        </button>
      </div>

      <div className={styles.svgsRow}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1040"
            height="100"
            viewBox="0 0 800 97"
            fill="none"
          >
            <path
              d="M581 0V39.2718C581 42.0332 578.761 44.2718 576 44.2718H548.416H5.99999C3.23857 44.2718 1 46.5104 1 49.2718V97"
              stroke="#3f85ca"
              strokeWidth="3"
            />
          </svg>
        </div>


        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1058"
            height="100"
            viewBox="0 0 5 100"
            fill="none"

          >
            <path
              d="M225 0V63.1592C225 65.9206 222.761 68.1592 220 68.1592H5.99999C3.23857 68.1592 1 70.3978 1 73.1592V100"
              stroke="#3f85ca"
              strokeWidth="3"
            />
          </svg>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1060"
            height="113"
            viewBox="-380 10 300 99"
            fill="none"

          >
            <path
              d="M1 0V62.1608C1 64.9222 3.23858 67.1608 6 67.1608H106C108.761 67.1608 111 69.3994 111 72.1608V99"
              stroke="#3f85ca"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>

      {/* PATH BUTTONS */}
      <div className={styles.pathButtons}>
        <button
          onClick={handlePathContent}
          data-content-for="Content Managers">
          <span className={styles.btnText}>For Content Managers</span>
          <Image
            src="/svg/btn-code.svg"
            alt="Content managers terminal"
            width={20}
            height={20}
            className={styles.btnImage}
          />
        </button>
        <button
          onClick={handlePathContent}
          data-content-for="Learners">
          <span className={styles.btnText}>For Learners</span>
          <Image
            src="/svg/btn-book.svg"
            alt="Content managers terminal"
            width={16}
            height={18}
            className={styles.btnImage}
          />
        </button>
        <button
          onClick={handlePathContent}
          data-content-for="Instructors">
          <span className={styles.btnText}>For Instructors</span>
          <Image
            src="/svg/btn-instructor.svg"
            alt="Content managers terminal"
            width={20}
            height={20}
            className={styles.btnImage}
          />
        </button>
      </div>

      {/* PATH CONTENT */}
      <div className={styles.pathContent}>
        Lorem trolling
      </div>

    </div>
  )
}

export default StartAcademyDesktop
