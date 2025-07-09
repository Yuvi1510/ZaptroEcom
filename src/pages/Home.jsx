import React from 'react'
import Carousel from '../components/Carousel'
import Category from '../components/Category'
import MidBanner from '../components/MidBanner'
import FeaturesComponent from "../components/FeaturesComponent"

const Home = () => {
  return (
    <div>
      <Carousel/>
      <Category/>
      <MidBanner/>
     <FeaturesComponent/>
      
    </div>
  )
}

export default Home
