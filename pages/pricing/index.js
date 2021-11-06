import React from 'react'
import Banner from '../../components/Banner'
import PricingCards from '../../containers/PricingCards'
import FreeTrail from '../../components/FreeTrial'


const Pricing = () => {
  return (
    <>
      <Banner
        title="Simple and Transparent Pricing"
        subtitle="Select the solution that best fits your needs."
        path="svg/banner-instructor-learner.svg"
        alt="Instructors and learners"
        width="540"
        height="520"
      />
      <PricingCards />
      <FreeTrail source="pricing" />

    </>
  )
}

export default Pricing
