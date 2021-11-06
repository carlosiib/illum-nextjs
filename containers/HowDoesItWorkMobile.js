import React from 'react'
import styles from '../styles/Containers.module.css'

const HowDoesItWorkMobile = () => {
  return (
    <section>
      <div className={styles.hdwMobileContainer}>
        <div className={styles.hdwMobile}>
          <h5>How Does Illumidesk Work?</h5>
          <span>Step. 1</span>
          <p className={styles.hdwTitle}>Set up your Course files as an Instructor.</p>
          <p className={styles.hdwSubTitle}>Register and sign in to IllumiDesk, access your grader notebook and create or import your course files. If you have an LTI compatible LMS then all data is synched transparently!</p>
        </div>
        <div className={styles.hdwMobileImg}>
          <img src="/svg/skew-grader-console.svg" alt="Grader console dashboard" width="290" height="218" loading="lazy" />
        </div>
      </div>

      <div className={styles.hdwMobileContainer}>
        <div className={styles.hdwMobile}>
          <span>Step. 2</span>
          <p className={styles.hdwTitle}>Fetch, complete and submit modules as a Student.</p>
          <p className={styles.hdwSubTitle}>With the click of a button fetch assignments for your course and engage with live, interactive content. If required, complete submit the assignment, quiz, or test for review.</p>
        </div>
        <div className={styles.hdwMobileImg}>
          <img src="/svg/skew-assignment-list.svg" alt="Dashboard user list tasks" width="290" height="218" loading="lazy" />
        </div>
      </div>

      <div className={styles.hdwMobileContainer}>
        <div className={styles.hdwMobile}>
          <span>Step. 3</span>
          <p className={styles.hdwTitle}>Review, Grade, and add Feedback as an Instructor.</p>
          <p className={styles.hdwSubTitle}>Once the student has submitted their assignment, Instructors have the option to initiate automated grading and provide inline feedback for their students. Then, Instructors have the option to release feedback to students and submit scores to the LMS.</p>
        </div>
        <div className={styles.hdwMobileImg}>
          <img src="/svg/skew-correct-assignment.svg" alt="Dashboard correct assignment" width="290" height="218" loading="lazy" />
        </div>
      </div>


      <div className={styles.hdwMobileContainer}>
        <div className={styles.hdwMobile}>
          <span>Step. 4</span>
          <p className={styles.hdwTitle}>Sync data with your Learning Management System.</p>
          <p className={styles.hdwSubTitle}>Synchronize your data, such as users, groups, and grades with your Learning Management System.</p>
        </div>
        <div className={styles.hdwMobileImg}>
          <img src="/svg/skew-user-tasks.svg" alt="Grader console dashboard user tasks" width="290" height="218" loading="lazy" />
        </div>
      </div>



    </section>

  )
}

export default HowDoesItWorkMobile
