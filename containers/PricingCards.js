import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from '../styles/Containers.module.css'

const PricingCards = () => {
  return (
    <section>
      <div className={styles.pricingCardsContainer}>
        <div className={styles.cardItem}>
          <h3 className={styles.cardItemTitle}>Pro</h3>
          <div className={styles.innerContent}>
            <p className={styles.cardPrice}>$7.20</p>
            <span>user/month</span>
            <p className={styles.cardBenefit}>Ideal for instructors and learners working as teams.</p>
            <motion.div
              whileHover={{
                scale: 1.04,
                transition: {
                  type: "spring",
                  stiffness: 1000,
                }
              }}>
              <Link href="https://app.illumidesk.com/login?utm_source=pricing&utm_medium=pricing-pro-card&utm_campaign=web" >
                <a target="_blank" rel="noreferrer" className={styles.proCardAnchor}>Get started</a>
              </Link>
            </motion.div>
          </div>
          <div>
            <ul className={styles.cardsList}>
              <li>1 Solution Designer</li>
              <li>Up to 10 Learner Environments</li>
              <li>Auto-Grading</li>
              <li>Manual Grading with Inline Feedback</li>
              <li>LMS integration with LTI 1.1 and LTI 1.3</li>
              <li>Custom End-User Docker Images</li>
              <li>Share Data Visualization Dashboards</li>
            </ul>
          </div>
        </div>

        <div className={styles.cardItem}>
          <h3 className={styles.cardItemTitle}>Enterprise</h3>
          <div className={styles.innerContent}>
            <p className={styles.cardPrice}>Contact us</p>
            <span className={styles.hiddenEl}>TBT</span>
            <p className={styles.cardSecondBenefit}>For larger organizations that need more specialized features.</p>
            <motion.div
              whileHover={{
                scale: 1.04,
                transition: {
                  type: "spring",
                  stiffness: 1000,
                }
              }}>
              <Link href="https://app.illumidesk.com/login?utm_source=pricing&utm_medium=pricing-enterprise-card&utm_campaign=web" >
                <a target="_blank" rel="noreferrer" className={styles.enterpriseCardAnchor}>Get it touch</a>
              </Link>
            </motion.div>
          </div>
          <div>
            <ul className={styles.cardsList}>
              <li>All the features of Pro plus:</li>
              <li>Access control and audit logs</li>
              <li>Integration with GitOps for release management</li>
              <li>Support for air-gapped (behind the FW) installations</li>
              <li className={styles.hiddenEl}>TBT</li>
              <li className={styles.hiddenEl}>TBT</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingCards
