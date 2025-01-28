import { Container } from 'react-bootstrap'
import Cover from './Cover'
import TechSkills from './TechSkills'
import Projects from './Projects'
import Contacts from './Contacts'
import MyNav from './MyNav'
import Footer from './Footer'
import LanguageSwitcher from './lang/LanguageSwitcher'

const Home = () => {
  return (
    <Container className="mt-4">
      <LanguageSwitcher />
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
