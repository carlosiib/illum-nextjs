import React from 'react'
import SkewContent from '../SkewContent'
import styles from '../../styles/HowDoesItWorks.module.css'

const HowDoesItWorks = () => {
  return (
    <div className={styles.howDoesItWorks}>
      <h5>How Does Illumidesk Work?</h5>
      <div className={styles.skewContainer}>
        <img
          src="/svg/skew-dashboard.svg"
          className="sticky-img"
          alt="Illumidesk main dashboard"
          width="540"
          height="429"
        />

        <div>
          {/* PATH CONTENT 1 */}
          <SkewContent
            order="img-text"
            title="Set up your Course files as an Instructor"
            subtitle="Register and sign in to IllumiDesk, access your grader notebook and create or import your course files. If you have an LTI compatible LMS then all data is synched transparently!"
            isFirstSkew={true}
          />

          {/* PATH CONTENT 2 */}
          <SkewContent
            order="text-img"
            title="Fetch, complete and submit modules as a Student"
            subtitle="With the click of a button fetch assignments for course and engage with live, interactive content. If required, complete submit the assignment, quiz or test for review."
          />

          {/* PATH NUMH CONTENT 3 */}
          <SkewContent
            order="img-text"
            title="Review, Grade, and add Feedback as an Instructor"
            subtitle="Once the student has submitted their assignment, Instructors have the option to initiate automated grading and provide inline feedback for their students. Then, Instructors have the option to release feedback to students and submit scores to the LMS."
          />

          {/* PATH NUMH CONTENT 4 */}
          <SkewContent
            order="text-img"
            title="Sync data with your Learning Management System"
            subtitle="Synchronize your data, such as users, groups and grades with your Learning Management System."
          />
        </div>
      </div>
    </div>
  )
}

export default HowDoesItWorks
