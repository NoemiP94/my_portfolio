import { Button, Col, Container, Row } from 'react-bootstrap'
import museum from '../../assets/museum.png'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { useLanguage } from '../lang/LanguageProvider'

const Museum = () => {
  const { language } = useLanguage()
  return (
    <Container className="my-5 ">
      <Row className="border-cover p-2 flex flex-column">
        {language == 'it' ? (
          <Col className="color text-center fw-bold fs-2">
            <p>Museo della Memoria Mineraria</p>
            <p>- Su Zurfuru -</p>
          </Col>
        ) : (
          <Col className="color text-center fw-bold fs-2">
            <p>Museum of Mining Memory</p>
            <p>- Su Zurfuru -</p>
          </Col>
        )}

        <Col className="d-flex justify-content-center">
          <img src={museum} className="w-75" />
        </Col>
        <Col className="mt-5">
          {language === 'it' ? (
            <>
              <p>
                Questo progetto è stato sviluppato come Capstone Project del
                corso Full Stack Developer di Epicode.
              </p>
              <p>
                Questa applicazione permette agli utenti di visualizzare le
                principali informazioni sul Museo della Memoria Mineraria di Su
                Zurfuru. Inoltre, gli utenti possono accedere alle ultime
                notizie attraverso un blog e visualizzare gli eventi disponibili
                per la prenotazione. Il blog, gli eventi e le prenotazioni sono
                tutti elementi gestibili da un&apos;area riservata utilizzando
                un account Admin.
              </p>
            </>
          ) : (
            <>
              <p>
                This project was developed as a Capstone Project of Epicode's
                Full Stack Developer class.
              </p>
              <p>
                This application allows users to display the main informations
                about Su Zurfuru&apos;s Museum of Minimg Memory. Moreover, users
                can access to the latest news through a blog and display all
                available events for booking. The blog, events and bookings are
                all elements manageables by a reserved area using an Admin
                account.
              </p>
            </>
          )}

          <p className="color fw-bold">Responsive</p>
        </Col>
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
            <li>Bootstrap</li>
          </ul>
        </Col>
        <Col>
          <Link
            to="https://github.com/NoemiP94/Capstone_fe/tree/main"
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

export default Museum
