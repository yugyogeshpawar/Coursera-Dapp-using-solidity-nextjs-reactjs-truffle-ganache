import Head from 'next/head'
import { Hero, } from '@components/ui/common/'
import { PartnersHero, ProfessionalCertificates, MastersDegree, CoursesAndSpecializations, ExploreCoursera, HundredPercentFree } from '@components/ui/homeComponents'
import { BaseLayout } from '@components/layout'


export default function Home() {

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

Home.Layout = BaseLayout
