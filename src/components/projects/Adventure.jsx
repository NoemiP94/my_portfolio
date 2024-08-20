import { Button, Col, Container, Row } from 'react-bootstrap'
import museum from '../../assets/museum.png'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'

const Adventure = () => {
  return (
    <Container className="my-5 ">
      <Row className="border-cover p-2 flex flex-column">
        <Col className="color text-center fw-bold fs-2">
          <p>Nika&apos; Adventure</p>
        </Col>
        <Col className="d-flex justify-content-center">
          <img src={museum} className="w-75" />
        </Col>
        <Col className="mt-5">
          <p>descrizione</p>
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
        <Button className="w-25 m-3">
          <Link to={'/'} className="text-decoration-none color">
            Indietro
          </Link>
        </Button>
      </Row>
    </Container>
  )
}

export default Adventure