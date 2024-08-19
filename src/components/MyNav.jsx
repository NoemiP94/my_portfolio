import { Col, Container, Row } from 'react-bootstrap'
import { BsGearFill } from 'react-icons/bs'
import { FaMailBulk } from 'react-icons/fa'
import { GiFullFolder, GiRoundStar } from 'react-icons/gi'

const MyNav = () => {
  return (
    <Container>
      <Row className="border-nav rounded text-center color flex align-items-center">
        <Col className="border-nav-end border-nav-end flex justify-content-center align-items-center my-2 ">
          <div>
            <GiRoundStar />
          </div>
          <div className="d-none d-md-block">Chi Sono</div>
        </Col>

        <Col className="border-nav-end flex m-1">
          <div>
            <BsGearFill />
          </div>
          <div className="d-none d-md-block">Tech Skills</div>
        </Col>
        <Col className="border-nav-end flex m-1">
          {' '}
          <div>
            <GiFullFolder />
          </div>
          <div className="d-none d-md-block">Progetti</div>
        </Col>
        <Col className=" flex m-1">
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
