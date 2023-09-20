import React from 'react'
import Header from '../components/header'
import Hero from '../components/hero'
import HeroText from '../components/herotext'
import TwoPartitions from '../components/two-partitions'
import BigTitle from '../components/big-title'
import MotiveSentense from '../components/motive-sentense'
import ImageGallery from '../components/imagegallery'
import BottomLinks from '../components/bottom-links'
import UpsideDown from '../components/upsidedownparagraphs'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <HeroText />
        <TwoPartitions />
        <BigTitle />
        <MotiveSentense />
        <ImageGallery />
        <BottomLinks />
        <UpsideDown />
        <Footer />
    </div>
  )
}

export default Home