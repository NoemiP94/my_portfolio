import { Container } from 'react-bootstrap'
import MyNav from './MyNav'
import Cover from './Cover'
import TechSkills from './TechSkills'

const Home = () => {
  return (
    <Container className="mt-4">
      <MyNav />
      <Cover />
      <TechSkills />
    </Container>
  )
}

export default Home
