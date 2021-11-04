import Head from 'next/head'
import Banner from '../components/Banner'
import StartAcademyDesktop from '../components/StartAcademyDesktop'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Illumidesk LMS" />
        <link rel="icon" href="/favicon.ico" />

        <title>Illumidesk</title>
      </Head>

      <main>
        <Banner
          title="Interactive Learning Environments for Data Heroes"
          subtitle="Interactive teaching and learning concept powered by web-enabled Data Science Notebooks."
          path="svg/banner-instructor-learner.svg"
          alt="Instructors and learners"
          width="540"
          height="520"
        />
        <StartAcademyDesktop />
      </main>


    </div>
  )
}
