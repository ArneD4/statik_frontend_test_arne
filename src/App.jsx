import { useState } from 'react'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import { useTranslation } from 'react-i18next';


function App() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Navbar />  
      <Hero />
    </>
  )
}

export default App
