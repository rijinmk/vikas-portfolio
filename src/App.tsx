import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import CaseStudyPage from './pages/CaseStudyPage/CaseStudyPage'
import ComponentGallery from './pages/ComponentGallery/ComponentGallery'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/case-study' element={<CaseStudyPage />} />
          <Route path='/component-gallery' element={<ComponentGallery />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
