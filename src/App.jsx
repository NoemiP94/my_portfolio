import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import { Container } from 'react-bootstrap'
import MyNav from './components/MyNav'
import Museum from './components/projects/Museum'
import Footer from './components/Footer'
import Genshin from './components/projects/Genshin'
import Adventure from './components/projects/Adventure'
import Linkedin from './components/projects/Linkedin'
import Weather from './components/projects/Weather'

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
            <Route path="genshin" element={<Genshin />} />
            <Route path="adventure" element={<Adventure />} />
            <Route path="linkedin" element={<Linkedin />} />
            <Route path="weather" element={<Weather />} />
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
