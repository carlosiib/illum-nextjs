import Head from 'next/head'
import Banner from '../components/Banner'
import StartAcademyDesktop from '../components/StartAcademyDesktop'
import FreeTrial from '../components/FreeTrial'
import HowDoesItWorks from '../components/HowDoesItWorks'
import Customers from '../components/Customers'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import useMediaQuery from '../hooks/useMediaQuery'
import styles from '../styles/Home.module.css'

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 991px)")
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Notebooks as a service for LMS systems" />

        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />

        <title>Illumidesk</title>
      </Head>

      <Banner
        title="Interactive Learning Environments for Data Heroes"
        subtitle="Interactive teaching and learning concept powered by web-enabled Data Science Notebooks."
        path="svg/banner-instructor-learner.svg"
        alt="Instructors and learners"
        width="540"
        height="520"
      />
      {isMobile ? <p>Hello</p> : <StartAcademyDesktop />}
      <FreeTrial source="main" />
      {isMobile ? <p>Hello</p> : <HowDoesItWorks />}

      <Customers />
      <Testimonials />
      <Newsletter />

    </div>
  )
}
