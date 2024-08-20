import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import museum from '../assets/museum.png'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <Container className="my-5 ">
      <Row className="border-cover p-2 flex flex-column">
        <Col className="color fw-bold fs-3 ">Progetti</Col>
        <Col className="mt-2 d-flex flex-column flex-md-row  justify-content-center align-items-center align-items-md-stretch flex-wrap">
          {/* inizio card */}

          <Card style={{ width: '18rem' }} className="custom-card m-2">
            <Card.Img variant="top" src={museum} />
            <Card.Body>
              <Card.Title className="my-2 text-center">
                Museo Su Zurfuru
              </Card.Title>

              <Button className="my-2">
                <Link to={'/museum'} className="text-decoration-none color ">
                  Dettagli
                </Link>
              </Button>
            </Card.Body>
          </Card>

          {/* fine card */}
          {/* inizio card */}

          <Card style={{ width: '18rem' }} className="custom-card m-2">
            <Card.Img variant="top" src={museum} />
            <Card.Body>
              <Card.Title className="my-2 text-center">
                Genshin World
              </Card.Title>

              <Button className="my-2">Dettagli</Button>
            </Card.Body>
          </Card>

          {/* fine card */}
          {/* inizio card */}

          <Card style={{ width: '18rem' }} className="custom-card m-2">
            <Card.Img variant="top" src={museum} />
            <Card.Body>
              <Card.Title className="my-2 text-center">
                Nika&apos;s Adventure
              </Card.Title>

              <Button className="my-2">Dettagli</Button>
            </Card.Body>
          </Card>

          {/* fine card */}

          <Card style={{ width: '18rem' }} className="custom-card m-2">
            <Card.Img variant="top" src={museum} />
            <Card.Body>
              <Card.Title className="my-2 text-center">
                Linkedin Clone
              </Card.Title>

              <Button className="my-2">Dettagli</Button>
            </Card.Body>
          </Card>

          {/* fine card */}
          {/* fine card */}

          <Card style={{ width: '18rem' }} className="custom-card m-2">
            <Card.Img variant="top" src={museum} />
            <Card.Body>
              <Card.Title className="my-2 text-center">Weather App</Card.Title>

              <Button className="my-2">Dettagli</Button>
            </Card.Body>
          </Card>

          {/* fine card */}
        </Col>
      </Row>
    </Container>
  )
}

export default Projects
