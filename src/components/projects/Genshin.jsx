import { Button, Col, Container, Row } from 'react-bootstrap'
import genshin from '../../assets/genshin.png'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { useLanguage } from '../lang/LanguageProvider'

const Genshin = () => {
  const { language } = useLanguage()
  return (
    <Container className="my-5 ">
      <Row className="border-cover p-2 flex flex-column">
        <Col className="color text-center fw-bold fs-2">
          <p>Genshin World</p>
        </Col>
        <Col className="d-flex justify-content-center">
          <img src={genshin} className="w-75" />
        </Col>
        {language === 'it' ? (
          <Col className="mt-5">
            <p>
              Questa applicazione è basata sul famoso videogioco action RPG
              Genshin Impact.
            </p>
            <p>
              L&apos;utente, dopo l&apos;accesso, può inserire i vari dati sui
              personaggi, equipaggiamenti, boss, mondo di gioco e molto altro.
              Inoltre è possibile gestire un blog.
            </p>
          </Col>
        ) : (
          <Col className="mt-5">
            <p>
              This application was based on the famous action RPG videogame
              Genshin Impact.
            </p>
            <p>
              The user, after the log in, can add all datas about characters,
              equipments, bosses, world game and more. Moreover is possible to
              manage a blog.
            </p>
          </Col>
        )}

        <Col>
          <p>Back-end:</p>
          <ul>
            <li>Java Spring Boot</li>
            <li>PostgreSQL</li>
          </ul>
          <p>Front-end:</p>
          <ul>
            <li>ReactJs</li>
            <li>Redux</li>
            <li>TailwindCSS</li>
          </ul>
        </Col>
        <Col>
          <Link
            to="https://github.com/NoemiP94/genshin-world"
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

export default Genshin
