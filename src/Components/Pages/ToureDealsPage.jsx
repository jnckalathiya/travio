import React from 'react'
import PagesBanner from '../PagesBanner'
import TourDeals from '../Tour/TourDeals'
import Explore from '../Explore'
import Counter from '../Counter'

const ToureDealsPage = () => {
  return (
    <>
        <PagesBanner title ="Tour Deals"/>
        <TourDeals/>
        <Explore/>
        <Counter/>
    </>
  )
}

export default ToureDealsPage