import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import { Container } from 'react-bootstrap'
import MyNav from './components/MyNav'
import Museum from './components/projects/Museum'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        {' '}
        <Container>
          <MyNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="museum" element={<Museum />} />
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
