import Banner from '@/components/Banner'
import BottomBanner from '@/components/BottomBanner'
import Category from '@/components/Category'
import Footer from '@/components/Footer'
import TopDoctors from '@/components/TopDoctors'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Category/>
        <TopDoctors/>
        <BottomBanner/>
    </div>
  )
}

export default Home