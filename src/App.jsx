import { Suspense } from 'react'
import './App.css'
import { LoadingState } from './components/ui'
import { About, Contact, Hero, NavBar, Projects, Skills, Footer } from '/src/components/layout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      <NavBar />
      <ToastContainer />
      <Hero />
      <About />
      <Suspense fallback={<LoadingState />}><Skills /></Suspense>
      <Suspense fallback={<LoadingState />}><Projects /></Suspense>
      <Contact />
      <Footer />
    </>
  )
}

export default App