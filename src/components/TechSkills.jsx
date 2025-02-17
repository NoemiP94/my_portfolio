import { Col, Container, Row } from 'react-bootstrap'
import boot from '../assets/icons/bootstrap.png'
import css from '../assets/icons/css.png'
import django from '../assets/icons/django.png'
import git from '../assets/icons/git.png'
import github from '../assets/icons/github.png'
import html from '../assets/icons/html.png'
import intellij from '../assets/icons/intellij.png'
import java from '../assets/icons/java.png'
import jest from '../assets/icons/jest.png'
import js from '../assets/icons/js.png'
import npm from '../assets/icons/npm.png'
import postgres from '../assets/icons/postgres.png'
import postman from '../assets/icons/postman.png'
import python from '../assets/icons/python.png'
import react from '../assets/icons/react.png'
import redux from '../assets/icons/redux.png'
import sass from '../assets/icons/sass.png'
import spring from '../assets/icons/spring.png'
import tailwind from '../assets/icons/tailwind.png'
import ts from '../assets/icons/ts.png'
import vscode from '../assets/icons/vscode.png'
import angular from '../assets/icons/angular.png'
import { useLanguage } from './lang/LanguageProvider'

const TechSkills = () => {
  const { language } = useLanguage()
  return (
    <Container className="my-5 " id="tech">
      <Row className="border-cover p-2 d-flex flex-column">
        <Col className="color fw-bold fs-3">Tech Skills</Col>
        <Row className="d-flex flex-column  flex-wrap my-2 align-items-center justify-content-baseline">
          <Col>
            <h3>Back-end</h3>
            <Row className="my-3 align-items-center flex-column flex-md-row">
              <div className="d-flex flex-column flex-wrap justify-content-center flex-md-row align-items-center m-2">
                <div className="d-flex flex-column align-items-center">
                  <img src={java} alt="java" className="w-75" />
                  <p>Java</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src={postgres} alt="postgres" className="w-75" />
                  <p>PostgreSQL</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src={postman} alt="postman" className="w-75" />
                  <p>Postman</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src={spring} alt="spring" className="w-75" />
                  <p>Spring</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src={intellij} alt="intellij" className="w-75" />
                  <p>IntelliJ</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src={python} alt="python" className="w-75" />
                  <p>Python</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src={django} alt="django" className="w-50" />
                  <p>Django</p>
                </div>
              </div>
            </Row>
          </Col>
          <Col>
            <h3>Front-end</h3>
            <Row className="my-3  align-items-center">
              <div className="d-flex flex-column flex-wrap justify-content-center flex-md-row align-items-center m-2">
                <div className="d-flex flex-column align-items-center">
                  <img src={html} alt="html" className="w-75" />
                  <p>HTML5</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src={css} alt="css" className="w-75" />
                  <p>CSS3</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src={js} alt="js" className="w-75" />
                  <p>Javascript</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src={react} alt="react" className="w-75" />
                  <p>React</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src={angular} alt="tailwind" className="w-100 pb-3" />
                  <p>Angular</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src={redux} alt="redux" className="w-75" />
                  <p>Redux</p>
                </div>

                <div className="d-flex flex-column align-items-center">
                  <img src={boot} alt="bootstrap" className="w-75" />
                  <p>Bootstrap</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src={sass} alt="sass" className="w-75" />
                  <p>Sass</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src={ts} alt="ts" className="w-75" />
                  <p>TypeScript</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src={jest} alt="jest" className="w-75" />
                  <p>Jest</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src={tailwind} alt="tailwind" className="w-75" />
                  <p>TailwindCSS</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src={react} alt="react" className="w-75" />
                  <p>React Native</p>
                </div>
              </div>
            </Row>
          </Col>
          <Col>
            {language === 'it' ? <h3>Altri strumenti</h3> : <h3>Other</h3>}

            <Row className="my-3 align-items-center text-center">
              <div className="d-flex flex-column flex-md-row flex-wrap justify-content-center align-items-center m-2">
                <div className="d-flex flex-column align-items-center">
                  <img src={vscode} alt="vscode" className="w-75" />
                  <p>VSCode</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src={git} alt="git" className="w-75" />
                  <p>Git</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src={github} alt="github" className="w-75" />
                  <p>Github</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src={npm} alt="npm" className="w-75" />
                  <p>npm</p>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
  )
}

export default TechSkills
