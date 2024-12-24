import { Stack } from "@mui/material"
import Header from "./components/header/Header"
import Main from "./components/main/Main"

function App() {


  return (
    <Stack width='100%'
           height='auto'
           alignItems='center'
           gap='1rem'>
        <Header/>
        {/* <Main/> */}
    </Stack>
    

 
  )
}

export default App
