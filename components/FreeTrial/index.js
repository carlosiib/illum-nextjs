import React from 'react'
import { motion } from 'framer-motion'
import styles from '../../styles/FreeTrail.module.css'

const FreeTrial = ({ source }) => {
  return (
    <section>
      <div className={styles.freeTrialContainer}>
        <div>
          <h4>30 Days Free Trial</h4>
          <p>Start connecting your data today to enable the best product analytics!</p>
        </div>
        <div>
          <motion.a
            href={`https://app.illumidesk.com/login?utm_source=${source}&utm_medium=pricing-free-trial-btn&utm_campaign=web`}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.04
            }}>
            Start your free trial now
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default FreeTrial
