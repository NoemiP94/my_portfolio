import { Container } from 'react-bootstrap'
import MyNav from './MyNav'
import Cover from './Cover'

const Home = () => {
  return (
    <Container className="mt-4">
      <MyNav />
      <Cover />
    </Container>
  )
}

export default Home
