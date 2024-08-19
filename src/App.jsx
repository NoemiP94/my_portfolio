import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
