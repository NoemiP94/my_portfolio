import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import { Container } from 'react-bootstrap'
import Museum from './components/projects/Museum'
import Genshin from './components/projects/Genshin'
import Adventure from './components/projects/Adventure'
import Linkedin from './components/projects/Linkedin'
import Weather from './components/projects/Weather'
import Contacts from './components/Contacts'

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="museum" element={<Museum />} />
            <Route path="genshin" element={<Genshin />} />
            <Route path="adventure" element={<Adventure />} />
            <Route path="linkedin" element={<Linkedin />} />
            <Route path="weather" element={<Weather />} />
            <Route path="contacts" element={<Contacts />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
