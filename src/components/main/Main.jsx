import { Stack } from '@mui/material'
import React from 'react'
import PremiumTours from '../premium/PremiumTours'
import TourPlaces from '../tourPlaces/TourPlaces'
import About from '../about/About'

const Main = () => {
  return (
    <Stack width={'100%'}
           height={'auto'}
           alignItems={'center'}
           gap='1rem'>
        <PremiumTours/>
        <TourPlaces/>
        <About/>

    </Stack>
  )
}

export default Main
