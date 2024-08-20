import { Col, Container, Row } from 'react-bootstrap'

const TechSkills = () => {
  return (
    <Container className="my-5 ">
      <Row className="border-cover p-2 flex flex-column">
        <Col className="color fw-bold fs-3">Tech Skills</Col>
        <Row className="flex flex-row flex-wrap my-2">
          <Col>img</Col>
          <Col>img</Col>
          <Col>img</Col>
          <Col>img</Col>
          <Col>img</Col>
          <Col>img</Col>
          <Col>img</Col>
          <Col>img</Col>
          <Col>img</Col>
          <Col>img</Col>
        </Row>
      </Row>
    </Container>
  )
}

export default TechSkills
