import { Col, Container, Row } from 'react-bootstrap'
import { BsGearFill } from 'react-icons/bs'
import { FaMailBulk } from 'react-icons/fa'
import { GiFullFolder, GiRoundStar } from 'react-icons/gi'
import { useLanguage } from './lang/LanguageProvider'

const MyNav = () => {
  const { language } = useLanguage()
  return (
    <Container className="mt-5">
      <Row className="border-nav rounded text-center color d-flex align-items-center">
        <Col className="border-nav-end d-flex flex-column m-1 p-2">
          <a className=" text-decoration-none color" href="#me">
            <div>
              <GiRoundStar className="fs-1" />
            </div>
            {language === 'it' ? (
              <div className="d-none d-md-block">Chi Sono</div>
            ) : (
              <div className="d-none d-md-block">Home</div>
            )}
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
            {language === 'it' ? (
              <div className="d-none d-md-block ">Progetti</div>
            ) : (
              <div className="d-none d-md-block ">Projects</div>
            )}
          </a>
        </Col>
        <Col className=" d-flex flex-column m-1 p-2">
          {' '}
          <a className="text-decoration-none color" href="#contacts">
            <div>
              <FaMailBulk className="fs-1" />
            </div>
            {language === 'it' ? (
              <div className="d-none d-md-block ">Contatti</div>
            ) : (
              <div className="d-none d-md-block ">Contacts</div>
            )}
          </a>
        </Col>
      </Row>
    </Container>
  )
}

export default MyNav
