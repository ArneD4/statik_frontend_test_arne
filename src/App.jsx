import { useState } from 'react'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import { useTranslation } from 'react-i18next';


function App() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Navbar />  
      <Hero />
      <Intro />
    </>
  )
}

export default App
