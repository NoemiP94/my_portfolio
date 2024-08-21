import { Col, Container, Row } from 'react-bootstrap'
import { BsGearFill } from 'react-icons/bs'
import { FaMailBulk } from 'react-icons/fa'
import { GiFullFolder, GiRoundStar } from 'react-icons/gi'

const MyNav = () => {
  return (
    <Container className="mt-5">
      <Row className="border-nav rounded text-center color d-flex align-items-center">
        <Col className="border-nav-end d-flex flex-column m-1 p-2">
          <a className=" text-decoration-none color" href="#me">
            <div>
              <GiRoundStar className="fs-1" />
            </div>
            <div className="d-none d-md-block">Chi Sono</div>
          </a>
        </Col>

        <Col className="border-nav-end d-flex flex-column m-1 p-2">
          <a className="text-decoration-none color" href="#tech">
            {' '}
            <div>
              <BsGearFill className="fs-1" />
            </div>
            <div className="d-none d-md-block ">Tech Skills</div>
          </a>
        </Col>
        <Col className="border-nav-end d-flex flex-column m-1 p-2">
          <a className="text-decoration-none color" href="#projects">
            {' '}
            <div>
              <GiFullFolder className="fs-1" />
            </div>
            <div className="d-none d-md-block ">Progetti</div>
          </a>
        </Col>
        <Col className=" d-flex flex-column m-1 p-2">
          {' '}
          <a className="text-decoration-none color" href="#contacts">
            <div>
              <FaMailBulk className="fs-1" />
            </div>
            <div className="d-none d-md-block ">Contatti</div>
          </a>
        </Col>
      </Row>
    </Container>
  )
}

export default MyNav
