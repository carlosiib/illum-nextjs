import React from 'react'
import styles from '../../styles/PathContentDesktop.module.css'

const PathContentDesktop = ({ currentContent, heading, firstSubtile, firstSubheading, secondSubtile, secondSubheading }) => {
  return (
    <div className={styles.pathContentDesktop}>
      <div className={styles.primaryCol}>
        <h3>{heading}</h3>
        <div className={styles.pathDescription}>
          <div>
            {currentContent === "Instructors" &&
              <img src="/svg/path-fork.svg" alt="Content repository at Github" width="98" height="100" />
            }
            {currentContent === "Content Managers" &&
              <img src="/svg/path-command.svg" alt="Start creating" width="100" height="100" />
            }
            {currentContent === "Learners" &&
              <img src="/svg/path-book.svg" alt="Enroll now book" width="98" height="105" />
            }
            <p className={styles.pathSubtitle}>{firstSubtile}</p>
            <p className={styles.pathSubHeading}>{firstSubheading}</p>
          </div>
          <div>
            {currentContent === "Content Managers" &&
              <img src="/svg/path-qr-code.svg" alt="Enroll now book" width="100" height="98" />
            }
            {currentContent === "Learners" &&
              <img src="/svg/path-hands.svg" alt="Feedback" width="98" height="100" />
            }
            {currentContent === "Instructors" &&
              <img src="/svg/path-consultation.svg" alt="Automatic repetitive tasks" width="98" height="100" />
            }
            <p className={styles.pathSubtitle}>{secondSubtile}</p>
            <p className={styles.pathSubHeading}>{secondSubheading}</p>
          </div>
        </div>
      </div>

      <div className={styles.secondaryCol}>
        {currentContent === "Instructors" &&
          <img src="/svg/path-instructor.svg" alt="Start learning with a mentor" width="280" height="420" />
        }
        {currentContent === "Learners" &&
          <img src="/svg/path-learner.svg" alt="Enroll now" width="280" height="420" />
        }
        {currentContent === "Content Managers" &&
          <img src="/svg/path-developer.svg" alt="Start creating" width="280" height="420" />
        }
      </div>
    </div>
  )
}

export default PathContentDesktop
