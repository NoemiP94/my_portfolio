import { Button, Col, Container, Row } from 'react-bootstrap'
import drink1 from '../../assets/drink1.png'
import drink2 from '../../assets/drink2.png'
import drink3 from '../../assets/drink3.png'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { useLanguage } from '../lang/LanguageProvider'

const HowToCocktail = () => {
  const { language } = useLanguage()
  return (
    <Container className="my-5 ">
      <Row className="border-cover p-2 flex flex-column">
        <Col className="color text-center fw-bold fs-2">
          <p>How to Cocktail</p>
        </Col>
        <Col className="d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-center ">
          <div className="d-flex flex-md-row align-items-center justify-content-center mx-4">
            <img src={drink1} className="w-50 h-75 m-2 " />
            <img src={drink2} className="w-50 h-75 m-2" />
          </div>
          <div className="d-flex flex-md-row align-items-center justify-content-center mx-4">
            <img src={drink3} className="w-50 m-2" />
          </div>
        </Col>
        {language === 'it' ? (
          <Col className="mt-5">
            <p>
              Applicazione Android che permette la ricerca di ricette di
              centinaia di cocktail
            </p>
            <p>Per la realizzazione ho utilizzato una API esterna.</p>
          </Col>
        ) : (
          <Col className="mt-5">
            <p>
              An Android app that allows you to search for hundreds of cocktail
              recipes.
            </p>
            <p>For the realization I have used an external API.</p>
          </Col>
        )}

        <Col>
          <p>Front-end:</p>
          <ul>
            <li>React Native</li>
            <li>Paper</li>
          </ul>
        </Col>
        <Col>
          <Link
            to="https://github.com/NoemiP94/HowToCocktail"
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

export default HowToCocktail
