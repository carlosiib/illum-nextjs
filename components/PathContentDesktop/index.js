import React from 'react'
import Link from 'next/link'
import styles from '../../styles/PathContentDesktop.module.css'

const PathContentDesktop = ({ currentContent, heading, firstSubtile, firstSubheading, secondSubtile, secondSubheading }) => {
  return (
    <div className={styles.pathContentDesktop}>
      <div className={styles.primaryCol}>
        <h3>{heading}</h3>
        <div className={styles.pathDescription}>
          <div>
            {currentContent === "Instructors" &&
              <img src="/svg/path-fork.svg" alt="Content repository at Github" width="98" height="100" loading="lazy" />
            }
            {currentContent === "Content Managers" &&
              <img src="/svg/path-command.svg" alt="Start creating" width="100" height="100" loading="lazy" />
            }
            {currentContent === "Learners" &&
              <img src="/svg/path-book.svg" alt="Enroll now book" width="98" height="105" loading="lazy" />
            }
            <p className={styles.pathSubtitle}>{firstSubtile}</p>
            <p className={styles.pathSubHeading}>{firstSubheading}</p>
            {currentContent === "Instructors" &&
              (<Link href="https://app.illumidesk.com/login?utm_source=main&utm_medium=instructor-cta&utm_campaign=web">
                <a
                  className="path-content-anchor"
                  target="_blank"
                  rel="noreferrer">
                  Launch your course
                </a>
              </Link>)
            }
            {currentContent === "Content Managers" &&
              (<Link href="https://app.illumidesk.com/login?utm_source=main&utm_medium=content-Managers-cta&utm_campaign=web">
                <a
                  className="path-content-anchor"
                  target="_blank"
                  rel="noreferrer">
                  Start creating
                </a>
              </Link>)
            }
            {currentContent === "Learners" &&
              (<Link href="https://app.illumidesk.com/login?utm_source=main&utm_medium=learners-cta&utm_campaign=web">
                <a
                  className="path-content-anchor"
                  target="_blank" rel="noreferrer">
                  Enroll now
                </a>
              </Link>)
            }
          </div>
          <div>
            {currentContent === "Content Managers" &&
              <img src="/svg/path-qr-code.svg" alt="Enroll now book" width="100" height="98" loading="lazy" />
            }
            {currentContent === "Learners" &&
              <img src="/svg/path-hands.svg" alt="Feedback" width="98" height="100" loading="lazy" />
            }
            {currentContent === "Instructors" &&
              <img src="/svg/path-consultation.svg" alt="Automatic repetitive tasks" width="98" height="100" loading="lazy" />
            }
            <p className={styles.pathSubtitle}>{secondSubtile}</p>
            <p className={styles.pathSubHeading}>{secondSubheading}</p>

          </div>
        </div>
      </div>

      <div className={styles.secondaryCol}>
        {currentContent === "Instructors" &&
          <img src="/svg/path-instructor.svg" alt="Start learning with a mentor" width="280" height="420" loading="lazy" />
        }
        {currentContent === "Learners" &&
          <img src="/svg/path-learner.svg" alt="Enroll now" width="280" height="420" loading="lazy" />
        }
        {currentContent === "Content Managers" &&
          <img src="/svg/path-developer.svg" alt="Start creating" width="280" height="420" loading="lazy" />
        }
      </div>
    </div>
  )
}

export default PathContentDesktop
