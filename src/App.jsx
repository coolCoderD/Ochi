import React  from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marque from './components/Marque'
import About from './components/About'
import Eyes from './components/Eyes'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'

function App() {
  const scroll = new LocomotiveScroll();
  return (
    <>
    <div className='w-full min-h-screen  bg-zinc-900 text-white'>
      <Navbar/>
      <LandingPage/>
      <Marque/>
      <About/>
      <Eyes/>
      <Footer/>
    </div>
    </>
  )
}

export default App
