import './App.css'
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
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App