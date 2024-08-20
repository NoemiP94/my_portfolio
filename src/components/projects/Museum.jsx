import { Button, Col, Container, Row } from 'react-bootstrap'
import museum from '../../assets/museum.png'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'

const Museum = () => {
  return (
    <Container className="my-5 ">
      <Row className="border-cover p-2 flex flex-column">
        <Col className="color text-center fw-bold fs-2">
          <p>Museo della Memoria Mineraria</p>
          <p>- Su Zurfuru -</p>
        </Col>
        <Col className="d-flex justify-content-center">
          <img src={museum} className="w-75" />
        </Col>
        <Col className="mt-5">
          <p>
            Questo progetto è stato sviluppato come Capstone Project del corso
            Full Stack Developer di Epicode.
            <p>
              Questa applicazione permette agli utenti di visualizzare le
              principali informazioni sul Museo della Memoria Mineraria di Su
              Zurfuru. Inoltre, gli utenti possono accedere alle ultime notizie
              attraverso un blog e visualizzare gli eventi disponibili per la
              prenotazione. Il blog, gli eventi e le prenotazioni sono tutti
              elementi gestibili da un&apos;area riservata utilizzando un
              account Admin.
            </p>
          </p>
        </Col>
        <Col>
          <p>Back-end:</p>
          <ul>
            <li>Java Spring Boot</li>
            <li>PostgreSQL</li>
          </ul>
          <p>Front-end:</p>
          <ul>
            <li>ReactJs</li>
          </ul>
        </Col>
        <Col>
          <Link
            to="https://github.com/NoemiP94/Capstone_fe/tree/main"
            className="text-decoration-none color fw-bold p-2 d-flex align-items-center"
          >
            <FaGithub className="me-2" />
            Vai alla repository{' '}
          </Link>
        </Col>
        <Button className="w-25 m-3">
          <Link to={'/'} className="text-decoration-none color">
            Indietro
          </Link>
        </Button>
      </Row>
    </Container>
  )
}

export default Museum
