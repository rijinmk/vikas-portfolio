import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Layout/Header/Header'
import Footer from './components/Layout/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Header />
      <Footer />
    </div>
  )
}

export default App
