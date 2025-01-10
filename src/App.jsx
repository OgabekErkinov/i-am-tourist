import { Stack } from "@mui/material"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import { useRef } from "react"
import MobileMenu from './components/modals/MobileMenu'

function App() {
  const appRef = useRef(null)
  return (
    <Stack ref = {appRef} width='100%' height='auto' alignItems='center' gap='1rem'>
        <Header rootRef={appRef}/>
        <Main rootRef = {appRef}/>
        <Footer/>
        
    </Stack>
  )
}

export default App
