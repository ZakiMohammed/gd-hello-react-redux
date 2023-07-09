import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <>
      <Router>
        <Header />

        <div className='container my-5'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Navigate to={'/'} />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  )
}

export default App
