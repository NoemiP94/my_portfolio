import { Col, Container, Row } from 'react-bootstrap'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import { Link } from 'react-router-dom'

const Contacts = () => {
  return (
    <Container className="my-5 ">
      <Row className="border-cover p-2 flex flex-column">
        <Col className="color fw-bold fs-3 ">Contatti</Col>
        <Col className="mt-3">
          <div className="text-center">
            <Link
              to="https://www.linkedin.com/in/noemi-pusceddu-developer"
              className="text-decoration-none"
            >
              <img src={linkedin} alt="linkedin" className="mx-3" />
            </Link>
            <Link
              to="https://github.com/NoemiP94"
              className="text-decoration-none"
            >
              <img src={github} alt="github" className="mx-3" />
            </Link>
          </div>
          <div className="text-center mt-3">
            <p>Vuoi saperne di più?</p>
            <p className="fw-bold">Mandami una mail!</p>
            <p className="color fw-bold">m_emi94@hotmail.it</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Contacts
