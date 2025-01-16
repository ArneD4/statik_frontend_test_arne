import { useState } from 'react'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Sectoren from './components/Sectoren'
import Cijfers from './components/Cijfers'
import { useTranslation } from 'react-i18next';


function App() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Navbar />  
      <Hero />
      <Intro />
      <Projects />
      <Sectoren />
      <Cijfers />
    </>
  )
}

export default App
