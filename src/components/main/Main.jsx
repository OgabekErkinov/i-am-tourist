import { Stack } from '@mui/material'
import React from 'react'
import PremiumTours from '../premium/PremiumTours'
import TourPlaces from '../tourPlaces/TourPlaces'
import About from '../about/About'
import BookATicket from '../bookTicket/BookATicket'

const Main = ({rootRef}) => {
  return (
    <Stack width={'100%'}
           height={'auto'}
           alignItems={'center'}
           gap='1rem'>
        <PremiumTours/>
        <TourPlaces rootRef = {rootRef}/>
        <About/>
        <BookATicket/>

    </Stack>
  )
}

export default Main
