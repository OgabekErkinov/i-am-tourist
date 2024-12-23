import { Stack } from '@mui/material'
import React from 'react'
import PremiumTours from '../premium/PremiumTours'
import TourPlaces from '../tourPlaces/TourPlaces'

const Main = () => {
  return (
    <Stack width={'100%'}
    height={'auto'}
    alignItems={'center'}>
        <PremiumTours/>
        <TourPlaces/>

    </Stack>
  )
}

export default Main
