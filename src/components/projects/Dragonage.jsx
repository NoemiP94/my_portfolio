import { Button, Col, Container, Row } from 'react-bootstrap'
import dragonage1 from '../../assets/dragonage1.png'
import dragonage2 from '../../assets/dragonage2.png'
import dragonage3 from '../../assets/dragonage3.png'
import dragonage4 from '../../assets/dragonage4.png'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { useLanguage } from '../lang/LanguageProvider'

const Dragonage = () => {
  const { language } = useLanguage()
  return (
    <Container className="my-5 ">
      <Row className="border-cover p-2 flex flex-column">
        <Col className="color text-center fw-bold fs-2">
          <p>Dragon Age</p>
        </Col>
        <Col className="d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-center ">
          <div className="d-flex  flex-md-row align-items-center justify-content-center mx-4">
            <img src={dragonage1} className="w-50 m-2 " />
            <img src={dragonage2} className="w-50 m-2" />
          </div>
          <div className="d-flex flex-md-row align-items-center justify-content-center mx-4">
            {' '}
            <img src={dragonage3} className="w-50 m-2" />
            <img src={dragonage4} className="w-50 m-2" />
          </div>
        </Col>
        {language === 'it' ? (
          <Col className="mt-5">
            <p>
              Questa applicazione è basata sul famoso videogioco fantasy Dragon
              Age.
            </p>{' '}
            <p>
              Avviando il backend è possibile, tramite l&apos;area Admin di
              Django, inserire i dati necessari.
            </p>
            <p>
              Avviando il frontend, invece, è possibile visualizzare tutti i
              dati inseriti nel backend attraverso un&apos;interfaccia grafica
              semplice e intuitiva.
            </p>
          </Col>
        ) : (
          <Col className="mt-5">
            <p>
              This application is based on the famous fantasy videogame Dragon
              Age.
            </p>{' '}
            <p>
              By starting the backend, thanks to Django Admin Area, is possible
              to add all necessary data.
            </p>
            <p>
              By starting the frontend, it&apos;s possible to display all data
              added in the backend through an easy and user-friendly graphic
              interface.
            </p>
          </Col>
        )}

        <Col>
          <p>Back-end:</p>
          <ul>
            <li>Python/Django</li>
            <li>PostgreSQL</li>
          </ul>
          <p>Front-end:</p>
          <ul>
            <li>Angular</li>
            <li>Angular Material</li>
            <li>TailwindCSS</li>
          </ul>
        </Col>
        <Col>
          <Link
            to="https://github.com/NoemiP94/dragon-age"
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

export default Dragonage
