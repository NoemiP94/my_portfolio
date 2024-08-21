import { Button, Col, Container, Row } from 'react-bootstrap'
import linkedin from '../../assets/linkedin.png'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'

const Linkedin = () => {
  return (
    <Container className="my-5 ">
      <Row className="border-cover p-2 flex flex-column">
        <Col className="color text-center fw-bold fs-2">
          <p>Linkedin Clone</p>
        </Col>
        <Col className="d-flex justify-content-center">
          <img src={linkedin} className="w-75" />
        </Col>
        <Col className="mt-5">
          <p>
            Applicazione realizzata in team durante la terza Build Week del
            corso di Epicode
          </p>
          <p>
            Si tratta della riproduzione nella gran parte delle sue funzionalità
            della famosa piattaforma per la ricerca del lavoro Linkedin.
          </p>

          <p className="color fw-bold">Responsive</p>
        </Col>
        <Col>
          <p>Front-end:</p>
          <ul>
            <li>ReactJs</li>
            <li>Redux</li>
            <li>Bootstrap</li>
          </ul>
        </Col>
        <Col>
          <Link
            to="https://github.com/OleksandrLarionov/Build-Week-3-Team-1"
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

export default Linkedin
