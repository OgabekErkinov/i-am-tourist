import { Stack } from "@mui/material"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import { useRef } from "react"
import ContactModal from "./components/modals/ContactModal"
import InfoPlaceModal from "./components/modals/InfoPlaceModal"
import AlertModal from "./components/modals/AlertModal"
import './I18/i18'
import MobileMenu from "./components/modals/MobileMenu"

function App() {

  return (
    <Stack  width='100%' height='auto' alignItems='center' gap='1rem'>
        <Header/>
        <Main/>
        <Footer/> 
        <MobileMenu/> 
        <ContactModal/>
        <InfoPlaceModal/>  
        <AlertModal/>
    </Stack>
  )
}

export default App
