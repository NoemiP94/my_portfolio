import { Col, Container, Row } from 'react-bootstrap'
import { BsGearFill } from 'react-icons/bs'
import { FaMailBulk } from 'react-icons/fa'
import { GiFullFolder, GiRoundStar } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const MyNav = () => {
  return (
    <Container className="mt-5">
      <Row className="border-nav rounded text-center color d-flex align-items-center">
        <Col className="border-nav-end d-flex flex-column m-1 p-2">
          <Link
            className="d-none d-md-block text-decoration-none color"
            href="#me"
          >
            <div>
              <GiRoundStar className="fs-1" />
            </div>
            Chi Sono
          </Link>
        </Col>

        <Col className="border-nav-end d-flex flex-column m-1 p-2">
          <Link
            className="d-none d-md-block text-decoration-none color"
            href="#tech"
          >
            {' '}
            <div>
              <BsGearFill className="fs-1" />
            </div>
            Tech Skills
          </Link>
        </Col>
        <Col className="border-nav-end d-flex flex-column m-1 p-2">
          <Link
            className="d-none d-md-block text-decoration-none color"
            href="#projects"
          >
            {' '}
            <div>
              <GiFullFolder className="fs-1" />
            </div>
            Progetti
          </Link>
        </Col>
        <Col className=" d-flex flex-column m-1 p-2">
          {' '}
          <Link
            className="d-none d-md-block text-decoration-none color"
            href="#contacts"
          >
            <div>
              <FaMailBulk className="fs-1" />
            </div>
            Contatti
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default MyNav
