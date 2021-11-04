import React, { useState } from 'react'
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
          Start your own Academy
          <img src="/svg/btn-checkmark.svg" alt="Checkmark icon" width="16" height="18" />
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
          For Content Managers
          <img src="/svg/btn-code.svg" alt="Content managers terminal" width="20" height="20" />
        </button>
        <button
          onClick={handlePathContent}
          data-content-for="Learners">
          For Learners
          <img src="/svg/btn-book.svg" alt="Content managers terminal" width="16" height="18" />
        </button>
        <button
          onClick={handlePathContent}
          data-content-for="Instructors">
          For Instructors
          <img src="/svg/btn-instructor.svg" alt="Content managers terminal" width="20" height="20" />
        </button>
      </div>

      {/* PATH CONTENT */}
      <div className={styles.pathContent}>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
      </div>

    </div>
  )
}

export default StartAcademyDesktop
