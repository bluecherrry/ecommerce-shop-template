import React from 'react'
import Category from '../Categories/Category'
import Footer from '../Footer/Footer'
import HeroCarosel from '../HeroSection/HeroCarosel'
import Sub from '../Subscribe/Sub'
import TopSell from '../TopSells/TopSell'

function LandingPage() {
  return (
    <div>
     <HeroCarosel/>
     <Category/>
      <TopSell/>
      <Sub/>
      <Footer/>
    </div>
  )
}

export default LandingPage
