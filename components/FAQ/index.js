import React, { useState } from 'react'
import FAQData from '../../public/data/faq.json'
import styles from '../../styles/FAQ.module.css'

const FAQ = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1)

  function clickQuestionHandler(id) {
    console.log(id)
    if (currentQuestion === id) {
      return setCurrentQuestion(null)
    }
    setCurrentQuestion(id)
  }

  return (
    <>
      <section>
        <h4 className={styles.faqTitle}>Frequently asked Questions</h4>
        <p className={styles.faqSubTitle}>Contact us via chat or email if you have any additional questions. We would love to hear from you!</p>
        <div className={styles.faqContainer}>
          {
            FAQData[0].faq &&
            FAQData[0].faq.map(({ id, question, answer }) => {
              return (
                <div key={id} className={styles.faqItem}>
                  <p
                    className={currentQuestion === id ? styles.faqQuestionSelected : styles.faqQuestion}
                    onClick={() => clickQuestionHandler(id)}>
                    {question}
                  </p>
                  {currentQuestion === id &&
                    <p className={styles.faqAnswer}>{answer}</p>
                  }
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default FAQ
