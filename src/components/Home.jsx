import { Container } from 'react-bootstrap'
import MyNav from './MyNav'
import Cover from './Cover'
import TechSkills from './TechSkills'
import Projects from './Projects'
import Contacts from './Contacts'
import Footer from './Footer'

const Home = () => {
  return (
    <Container className="mt-4">
      <MyNav />
      <Cover />
      <TechSkills />
      <Projects />
      <Contacts />
      <Footer />
    </Container>
  )
}

export default Home
