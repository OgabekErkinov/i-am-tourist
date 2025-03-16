import { lazy } from "react"
import { Suspense } from "react"
import './I18/i18'
import PageLoading from "./components/loadings/PageLoading"


function App() {
  const ModalContainer = lazy(() => import("./components/modals/ModalContainer"))
  const Header = lazy(() => import("./components/header/Header"))
  const Main = lazy(() => import("./components/main/Main"))
  const Footer = lazy(() => import("./components/footer/Footer"))

  return (
      <Suspense fallback= {<PageLoading/>}>
        <Header/>
         <Main/>
        {/* <Footer/>  */}
        <ModalContainer/>
    </Suspense>
  )
}

export default App
