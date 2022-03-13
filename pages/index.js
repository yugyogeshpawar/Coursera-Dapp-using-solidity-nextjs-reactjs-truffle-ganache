import {  Hero, } from '@components/ui/common/'
import { PartnersHero, ProfessionalCertificates, MastersDegree, CoursesAndSpecializations, ExploreCoursera, HundredPercentFree } from '@components/ui/homeComponents'

import Head from 'next/head'

export default function Home({ partners }) {

  return (
    <>
      <Head>
        <title>Coursera Dapp</title>
        <meta name="description" content="Coursera D_app" />
        <link rel="icon" href="/favicon-v2-16x16.png" />
      </Head>      
      <Hero />
      <PartnersHero />
      <ProfessionalCertificates />
      <MastersDegree />
      <CoursesAndSpecializations />
      <HundredPercentFree />
      <ExploreCoursera />
     
    </>
  )
}

