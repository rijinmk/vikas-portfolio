import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import CaseStudyPage from './pages/CaseStudyPage/CaseStudyPage'

function App() {
  const myVar = 'random'

  console.log(myVar)

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/case-study' element={<CaseStudyPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
