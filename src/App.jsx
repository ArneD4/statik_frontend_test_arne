import { useState } from 'react'
import Navbar from './components/NavBar'
import { useTranslation } from 'react-i18next';


function App() {
  const { t, i18n } = useTranslation();
  return (
    <>
    <h1>{t('navbar.title')}</h1>
      <Navbar />  
    </>
  )
}

export default App
