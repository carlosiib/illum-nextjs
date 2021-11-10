import Head from 'next/head'
import Banner from '../components/Banner'
import StartAcademyDesktop from '../components/StartAcademyDesktop'
import FreeTrial from '../components/FreeTrial'
import HowDoesItWorks from '../components/HowDoesItWorks'
import HowDoesItWorkMobile from '../containers/HowDoesItWorkMobile'
import Customers from '../components/Customers'
import Testimonials from '../components/Testimonials'
import useMediaQuery from '../hooks/useMediaQuery'
import StartAcademyMobile from '../containers/StartAcademyMobile'
import Newsletter from '../components/Newsletter'
import styles from '../styles/Home.module.css'

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 991px)")
  console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID)
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Notebooks as a service for LMS systems" />

        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />

        <title>ILLUMIDESK</title>

      </Head>

      <Banner
        title="Interactive Learning Environments for Data Heroes"
        subtitle="Interactive teaching and learning concept powered by web-enabled Data Science Notebooks."
        path="svg/banner-instructor-learner.svg"
        alt="Instructors and learners"
        isMobile={isMobile}
      />
      {isMobile ? <StartAcademyMobile /> : <StartAcademyDesktop />}
      <FreeTrial source="main" />
      {isMobile ? <HowDoesItWorkMobile /> : <HowDoesItWorks />}
      <Customers />
      <Testimonials />
      <Newsletter />

    </div>
  )
}
