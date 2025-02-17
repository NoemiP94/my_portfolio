import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import museum from '../assets/museum.png'
import genshin from '../assets/genshin.png'
import adventure from '../assets/adventure1.png'
import linkedin from '../assets/linkedin.png'
import weather from '../assets/weather.png'
import dragon from '../assets/dragonage1.png'
import drink from '../assets/drink.png'
import { Link } from 'react-router-dom'
import { useLanguage } from './lang/LanguageProvider'

const Projects = () => {
  const { language } = useLanguage()
  return (
    <Container className="my-5 " id="projects">
      <Row className="border-cover p-2 flex flex-column">
        {language === 'it' ? (
          <Col className="color fw-bold fs-3 ">Progetti</Col>
        ) : (
          <Col className="color fw-bold fs-3 ">Projects</Col>
        )}

        <Col className="mt-2 d-flex flex-column flex-md-row  justify-content-center align-items-center align-items-md-stretch flex-md-wrap">
          <Card style={{ width: '18rem' }} className="custom-card m-2">
            <Card.Img variant="top" src={museum} />
            <Card.Body className="d-flex flex-column justify-content-end">
              <Card.Title className="my-2 text-center">
                Su Zurfuru Museum
              </Card.Title>
              {language === 'it' ? (
                <Button className="my-2">
                  <Link to={'/museum'} className="text-decoration-none color ">
                    Dettagli
                  </Link>
                </Button>
              ) : (
                <Button className="my-2">
                  <Link to={'/museum'} className="text-decoration-none color ">
                    Details
                  </Link>
                </Button>
              )}
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className="custom-card m-2">
            <Card.Img variant="top" src={genshin} />
            <Card.Body className="d-flex flex-column justify-content-end">
              <Card.Title className="my-2 text-center">
                Genshin World
              </Card.Title>
              {language === 'it' ? (
                <Button className="my-2">
                  <Link to={'/genshin'} className="text-decoration-none color ">
                    Dettagli
                  </Link>
                </Button>
              ) : (
                <Button className="my-2">
                  <Link to={'/genshin'} className="text-decoration-none color ">
                    Details
                  </Link>
                </Button>
              )}
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className="custom-card m-2">
            <Card.Img variant="top" src={adventure} />
            <Card.Body className="d-flex flex-column justify-content-end">
              <Card.Title className="my-2 text-center">
                Nika&apos;s Adventure
              </Card.Title>
              {language === 'it' ? (
                <Button className="my-2">
                  <Link
                    to={'/adventure'}
                    className="text-decoration-none color "
                  >
                    Dettagli
                  </Link>
                </Button>
              ) : (
                <Button className="my-2">
                  <Link
                    to={'/adventure'}
                    className="text-decoration-none color "
                  >
                    Details
                  </Link>
                </Button>
              )}
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className="custom-card m-2">
            <Card.Img variant="top" src={linkedin} />
            <Card.Body className="d-flex flex-column justify-content-end">
              <Card.Title className="my-2 text-center">
                Linkedin Clone
              </Card.Title>
              {language === 'it' ? (
                <Button className="my-2">
                  <Link
                    to={'/linkedin'}
                    className="text-decoration-none color "
                  >
                    Dettagli
                  </Link>
                </Button>
              ) : (
                <Button className="my-2">
                  <Link
                    to={'/linkedin'}
                    className="text-decoration-none color "
                  >
                    Details
                  </Link>
                </Button>
              )}
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className="custom-card m-2">
            <Card.Img variant="top" src={weather} />
            <Card.Body className="d-flex flex-column justify-content-end">
              <Card.Title className="my-2 text-center">
                Weather Forecast
              </Card.Title>
              {language === 'it' ? (
                <Button className="my-2">
                  <Link to={'/weather'} className="text-decoration-none color ">
                    Dettagli
                  </Link>
                </Button>
              ) : (
                <Button className="my-2">
                  <Link to={'/weather'} className="text-decoration-none color ">
                    Details
                  </Link>
                </Button>
              )}
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className="custom-card m-2">
            <Card.Img variant="top" src={dragon} />
            <Card.Body className="d-flex flex-column justify-content-end">
              <Card.Title className="my-2 text-center">Dragon Age</Card.Title>
              {language === 'it' ? (
                <Button className="my-2">
                  <Link
                    to={'/dragonage'}
                    className="text-decoration-none color "
                  >
                    Dettagli
                  </Link>
                </Button>
              ) : (
                <Button className="my-2">
                  <Link
                    to={'/dragonage'}
                    className="text-decoration-none color "
                  >
                    Details
                  </Link>
                </Button>
              )}
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="custom-card m-2">
            <Card.Img variant="top" src={drink} />
            <Card.Body className="d-flex flex-column justify-content-end">
              <Card.Title className="my-2 text-center">
                How to Cocktail
              </Card.Title>
              {language === 'it' ? (
                <Button className="my-2">
                  <Link
                    to={'/cocktail'}
                    className="text-decoration-none color "
                  >
                    Dettagli
                  </Link>
                </Button>
              ) : (
                <Button className="my-2">
                  <Link
                    to={'/cocktail'}
                    className="text-decoration-none color "
                  >
                    Details
                  </Link>
                </Button>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Projects
