import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center py-1">
          <p className="lh-1">Noemi Pusceddu © {new Date().getFullYear()}</p>
          <p className="lh-1">All rights reserved</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
