import { Button, Col, Container, Row } from 'react-bootstrap'
import adventure1 from '../../assets/adventure1.png'
import adventure2 from '../../assets/adventure2.png'
import adventure3 from '../../assets/adventure3.png'
import adventure4 from '../../assets/adventure4.png'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { useLanguage } from '../lang/LanguageProvider'

const Adventure = () => {
  const { language } = useLanguage()
  return (
    <Container className="my-5 ">
      <Row className="border-cover p-2 flex flex-column">
        <Col className="color text-center fw-bold fs-2">
          <p>Nika&apos;s Adventure</p>
        </Col>
        <Col className="d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-center ">
          <div className="d-flex  flex-md-row align-items-center justify-content-center mx-4">
            <img src={adventure1} className="w-50 m-2 " />
            <img src={adventure2} className="w-50 m-2" />
          </div>
          <div className="d-flex flex-md-row align-items-center justify-content-center mx-4">
            {' '}
            <img src={adventure3} className="w-50 m-2" />
            <img src={adventure4} className="w-50 m-2" />
          </div>
        </Col>
        {language === 'it' ? (
          <Col className="mt-5">
            <p>
              Questo è un videogame 2D sviluppato in Java. Per questo progetto
              ho seguito il tutorial di RyiSnow:{' '}
              <span>
                {' '}
                <a
                  className="color text-decoration-none"
                  href="https://youtube.com/playlist?list=PL_QPQmz5C6WUF-pOQDsbsKbaBZqXj4qSq&si=A15KPYR4WoA_RULm"
                >
                  &quot;How to Make a 2D Game in Java&quot;
                </a>{' '}
              </span>
            </p>{' '}
            <p>
              Lo scopo è quello di imparare le meccaniche dietro il
              funzionamento di un videogame e aumentare la mia conoscenza su
              Java.
            </p>
          </Col>
        ) : (
          <Col className="mt-5">
            <p>
              This is a 2D videogame developed in Java. For this project I have
              followed this RyiSnow&apos;s tutorial{' '}
              <span>
                {' '}
                <a
                  className="color text-decoration-none"
                  href="https://youtube.com/playlist?list=PL_QPQmz5C6WUF-pOQDsbsKbaBZqXj4qSq&si=A15KPYR4WoA_RULm"
                >
                  &quot;How to Make a 2D Game in Java&quot;
                </a>{' '}
              </span>
            </p>{' '}
            <p>
              The purpose is to learn the mechanics behind a videogame and
              increase my knowledge about Java.
            </p>
          </Col>
        )}

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
            GitHub Repository{' '}
          </Link>
        </Col>

        {language === 'it' ? (
          <Button className="w-50 m-3">
            <Link to={'/'} className="text-decoration-none color">
              Indietro
            </Link>
          </Button>
        ) : (
          <Button className="w-50 m-3">
            <Link to={'/'} className="text-decoration-none color">
              Back
            </Link>
          </Button>
        )}
      </Row>
    </Container>
  )
}

export default Adventure
