import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Contacts = () => {
  return (
    <Container className="my-5 ">
      <Row className="border-cover p-2 d-flex flex-column">
        <Col className="color fw-bold fs-3 ">Contatti</Col>
        <Col className="mt-3">
          <div className="text-center d-flex align-items-center justify-content-center">
            <Link
              to="https://www.linkedin.com/in/noemi-pusceddu-developer"
              className="text-decoration-none"
            >
              <FaLinkedin className="me-2 color fs-1" />
            </Link>
            <Link
              to="https://github.com/NoemiP94"
              className="text-decoration-none "
            >
              <FaGithub className="me-2 color fs-1" />
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
