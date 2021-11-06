import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from '../styles/Containers.module.css'

const StartAcademyMobile = () => {
  return (
    <>
      <section>
        <div className={styles.mobileContainer}>
          <motion.button
            whileHover={{
              scale: 1.04,
              transition: {
                type: "spring",
                stiffness: 1000,
              }
            }}>
            <img src="/svg/btn-checkmark.svg" alt="Start your own Academy checkmark" width="16" height="18" loading="lazy" />
            Start your own academy
          </motion.button>
        </div>
        <div>
          <div className={styles.startAcademyItem}>
            <button>
              <img src="/svg/btn-instructor.svg" alt="Instructor feature" width="16" height="18" loading="lazy" />
              For Instructors
            </button>
            <div className={styles.startAcademyDescription}>
              <h3>Quickly create engaging learning experience that students will love.</h3>
              <div className={styles.startAcademyContent}>
                <div>
                  <img src="/svg/path-fork.svg" alt="Github assignment" width="90" height="90" loading="lazy" />
                  <p className={styles.startAcademyContentTitle}>Release assignments to student with a click of a button.</p>
                  <p className={styles.startAcademyContentDescription}>Reference existing content located in external git repos such as Github, BitBucket, and GitLab.</p>
                  <Link href="https://app.illumidesk.com/login?utm_source=main&utm_medium=instructor-cta&utm_campaign=web">
                    <a className="path-content-anchor"
                      target="_blank"
                      rel="noreferrer">
                      Launch your course
                    </a>
                  </Link>
                </div>
                <div>
                  <img src="/svg/path-consultation.svg" alt="Consultation with mentors" width="90" height="90" loading="lazy" />
                  <p className={styles.startAcademyContentTitle}>Supercharged grading tools.</p>
                  <p className={styles.startAcademyContentDescription}>Automate repetitive grading tasks. Provide inline feedback and release feedback to students for a richer user experience.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.startAcademyItem}>
            <button>
              <img src="/svg/btn-book.svg" alt="Start learning" width="16" height="18" loading="lazy" />
              For Learners
            </button>
            <div className={styles.startAcademyDescription}>
              <h3>Learn with Notebooks, that offer rich interactive web-based experiences.</h3>
              <div className={styles.startAcademyContent}>
                <div>
                  <img src="/svg/path-book.svg" alt="Guided workflows" width="90" height="90" loading="lazy" />
                  <p className={styles.startAcademyContentTitle}>Guided learning workflows.</p>
                  <p className={styles.startAcademyContentDescription}>Stay engaged with your material and learn by doing.</p>
                  <Link href="https://app.illumidesk.com/login?utm_source=main&utm_medium=learners-cta&utm_campaign=web">
                    <a className="path-content-anchor"
                      target="_blank"
                      rel="noreferrer">
                      Enroll now
                    </a>
                  </Link>
                </div>
                <div>
                  <img src="/svg/path-hands.svg" alt="Consultation with mentors" width="90" height="90" loading="lazy" />
                  <p className={styles.startAcademyContentTitle}>Seek additional help with the click of a button.</p>
                  <p className={styles.startAcademyContentDescription}>Engage with other course members, teacher's assistants, or instructors by providing the full context of your current environment.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.startAcademyItem}>
            <button>
              <img src="/svg/btn-code.svg" alt="Start learning" width="16" height="18" loading="lazy" />
              For Content Managers
            </button>
            <div className={styles.startAcademyDescription}>
              <h3>Import course content from existing sources or create fresh content with a simple and intuitive content designer.</h3>
              <div className={styles.startAcademyContent}>
                <div>
                  <img src="/svg/path-command.svg" alt="Terminal code" width="90" height="90" loading="lazy" />
                  <p className={styles.startAcademyContentTitle}>Web-based content designer.</p>
                  <p className={styles.startAcademyContentDescription}>Import content from existing sources such as GitHub or create your own fresh content with IllumiDesk's low-code / no-code content designer.</p>
                  <Link href="https://app.illumidesk.com/login?utm_source=main&utm_medium=content-manager-cta&utm_campaign=web">
                    <a className="path-content-anchor"
                      target="_blank"
                      rel="noreferrer">
                      Start creating
                    </a>
                  </Link>
                </div>
                <div>
                  <img src="/svg/path-qr-code.svg" alt="Code autogarder" width="90" height="90" loading="lazy" />
                  <p className={styles.startAcademyContentTitle}>Create Assessments and Assignments.</p>
                  <p className={styles.startAcademyContentDescription}>Mix and match blocks and components that are pre-configured to work with IllumiDesk's auto-grader.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StartAcademyMobile
