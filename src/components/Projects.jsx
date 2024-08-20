import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import museum from '../assets/museum.png'

const Projects = () => {
  return (
    <Container className="my-5 ">
      <Row className="border-cover p-2 flex flex-column">
        <Col className="color fw-bold fs-3 ">Progetti</Col>
        <Col className="flex mt-2  flex-column  flex-sm-row flex-wrap">
          {/* inizio card */}
          <Row className="justify-content-center align-items-center">
            <Card style={{ width: '18rem' }} className="custom-card m-2">
              <Card.Img variant="top" src={museum} />
              <Card.Body>
                <Card.Title>Museo Su Zurfuru</Card.Title>

                <Button>Dettagli</Button>
              </Card.Body>
            </Card>

            {/* fine card */}
            {/* inizio card */}

            <Card style={{ width: '18rem' }} className="custom-card m-2">
              <Card.Img variant="top" src={museum} />
              <Card.Body>
                <Card.Title>Genshin World</Card.Title>

                <Button>Dettagli</Button>
              </Card.Body>
            </Card>

            {/* fine card */}
            {/* inizio card */}

            <Card style={{ width: '18rem' }} className="custom-card m-2">
              <Card.Img variant="top" src={museum} />
              <Card.Body>
                <Card.Title>Nika&apos;s Adventure</Card.Title>

                <Button>Dettagli</Button>
              </Card.Body>
            </Card>

            {/* fine card */}

            <Card style={{ width: '18rem' }} className="custom-card m-2">
              <Card.Img variant="top" src={museum} />
              <Card.Body>
                <Card.Title>Linkedin Clone</Card.Title>

                <Button>Dettagli</Button>
              </Card.Body>
            </Card>

            {/* fine card */}
            {/* fine card */}

            <Card style={{ width: '18rem' }} className="custom-card m-2">
              <Card.Img variant="top" src={museum} />
              <Card.Body>
                <Card.Title>Weather App</Card.Title>

                <Button>Dettagli</Button>
              </Card.Body>
            </Card>
          </Row>

          {/* fine card */}
        </Col>
      </Row>
    </Container>
  )
}

export default Projects
