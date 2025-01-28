import { Button, Col, Container, Row } from 'react-bootstrap'
import weather from '../../assets/weather.png'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { useLanguage } from '../lang/LanguageProvider'

const Weather = () => {
  const { language } = useLanguage()
  return (
    <Container className="my-5 ">
      <Row className="border-cover p-2 flex flex-column">
        <Col className="color text-center fw-bold fs-2">
          <p>Weather Forecast</p>
        </Col>
        <Col className="d-flex justify-content-center">
          <img src={weather} className="w-75" />
        </Col>
        {language === 'it' ? (
          <Col className="mt-5">
            <p>
              Applicazione che permette la visualizzazione delle previsioni
              meteorologiche.
            </p>
            <p>Per la realizzazione ho utilizzato una API esterna.</p>
            <p className="color fw-bold">Responsive</p>
          </Col>
        ) : (
          <Col className="mt-5">
            <p>Application that allows to display weather forecasts.</p>
            <p>For the realization I have used an external API.</p>
            <p className="color fw-bold">Responsive</p>
          </Col>
        )}

        <Col>
          <p>Front-end:</p>
          <ul>
            <li>Angular</li>
            <li>Angular Material</li>
            <li>TailwindCSS</li>
          </ul>
        </Col>
        <Col>
          <Link
            to="https://github.com/NoemiP94/weather-forecast"
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

export default Weather
