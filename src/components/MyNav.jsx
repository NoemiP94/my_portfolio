import { Col, Container, Row } from 'react-bootstrap'
import { BsGearFill } from 'react-icons/bs'
import { FaMailBulk } from 'react-icons/fa'
import { GiFullFolder, GiRoundStar } from 'react-icons/gi'

const MyNav = () => {
  return (
    <Container className="mt-5">
      <Row className="border-nav rounded text-center color d-flex align-items-center">
        <Col className="border-nav-end d-flex flex-column m-1 p-2">
          <div>
            <GiRoundStar />
          </div>
          <div className="d-none d-md-block">Chi Sono</div>
        </Col>

        <Col className="border-nav-end d-flex flex-column m-1 p-2">
          <div>
            <BsGearFill />
          </div>
          <div className="d-none d-md-block">Tech Skills</div>
        </Col>
        <Col className="border-nav-end d-flex flex-column m-1 p-2">
          {' '}
          <div>
            <GiFullFolder />
          </div>
          <div className="d-none d-md-block">Progetti</div>
        </Col>
        <Col className=" d-flex flex-column m-1 p-2">
          {' '}
          <div>
            <FaMailBulk />
          </div>
          <div className="d-none d-md-block">Contatti</div>
        </Col>
      </Row>
    </Container>
  )
}

export default MyNav
