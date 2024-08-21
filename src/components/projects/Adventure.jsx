import { Button, Col, Container, Row } from 'react-bootstrap'
import adventure1 from '../../assets/adventure1.png'
import adventure2 from '../../assets/adventure2.png'
import adventure3 from '../../assets/adventure3.png'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'

const Adventure = () => {
  return (
    <Container className="my-5 ">
      <Row className="border-cover p-2 flex flex-column">
        <Col className="color text-center fw-bold fs-2">
          <p>Nika&apos;s Adventure</p>
        </Col>
        <Col className="d-flex  flex-row flex-wrap align-items-center justify-content-center">
          <img src={adventure1} className="w-25 m-2" />
          <img src={adventure2} className="w-25 m-2" />
          <img src={adventure3} className="w-25 m-2" />
        </Col>
        <Col className="mt-5">
          <p>
            Seguendo un tutorial sto sviluppando questo piccolo giochino in 2D.
          </p>
          <p>
            Lo scopo è quello di imparare le meccaniche dietro il funzionamento
            di un videogame.
          </p>
        </Col>
        <Col>
          <p>Back-end:</p>
          <ul>
            <li>Java</li>
          </ul>
        </Col>
        <Col>
          <Link
            to="https://github.com/NoemiP94/NikaAdventure"
            className="text-decoration-none color fw-bold p-2 d-flex align-items-center"
          >
            <FaGithub className="me-2" />
            Vai alla repository{' '}
          </Link>
        </Col>
        <Button className="w-50 m-3">
          <Link to={'/'} className="text-decoration-none color">
            Indietro
          </Link>
        </Button>
      </Row>
    </Container>
  )
}

export default Adventure
