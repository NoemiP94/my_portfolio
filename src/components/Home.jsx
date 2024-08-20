import { Container } from 'react-bootstrap'
import Cover from './Cover'
import TechSkills from './TechSkills'
import Projects from './Projects'
import Contacts from './Contacts'

const Home = () => {
  return (
    <Container className="mt-4">
      <Cover />
      <TechSkills />
      <Projects />
      <Contacts />
    </Container>
  )
}

export default Home
