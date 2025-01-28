import { Button, Col, Container, Row } from 'react-bootstrap'
import { MdOutlineFileDownload } from 'react-icons/md'
import me from '../assets/me.png'
import cvITA from '../assets/documents/Noemi_Pusceddu_CV_ITA.pdf'
import cvENG from '../assets/documents/Noemi_Pusceddu_CV_ENG.pdf'
import { useLanguage } from './lang/LanguageProvider'

const Cover = () => {
  const { language } = useLanguage()
  return (
    <Container className="my-5 " id="me">
      <Row className="d-flex flex-column flex-lg-row border-cover p-2 ">
        <Col className="col-12 col-lg-4 d-flex flex-column text-center my-2 justify-content-around align-items-center ">
          <div className="my-4 ">
            <img src={me} alt="" className="w-75 rounded" />
          </div>
          <div className="mb-2">
            {language === 'it' ? (
              <Button>
                <a
                  href={cvITA}
                  className="text-decoration-none color"
                  download="noemi_pusceddu_cv.pdf"
                >
                  {' '}
                  Download CV <MdOutlineFileDownload className="color" />
                </a>
              </Button>
            ) : (
              <Button>
                <a
                  href={cvENG}
                  className="text-decoration-none color"
                  download="noemi_pusceddu_cv.pdf"
                >
                  {' '}
                  Download CV <MdOutlineFileDownload className="color" />
                </a>
              </Button>
            )}
          </div>
        </Col>
        <Col className="col-12 col-lg-8 d-flex flex-column justify-content-center ">
          {language === 'it' ? (
            <>
              <p>
                Sono una Full Stack Developer:
                <br />
                creo applicativi web dinamici e funzionali a partire dallo
                sviluppo dei database e API alla creazione di interfacce Web
                utilizzando i metodi più efficaci e moderni per lo sviluppo
                appresi studiando presso EPICODE.🌐​🛠️
              </p>
              <p>
                👥 A lavora sono una persona seria e precisa, mi impegno e ho
                sempre voglia di imparare e migliorarmi. Nel lavoro metto sempre
                tutta me stessa, mi piace lavorare in team e confrontarmi con
                gli altri. Mi integro bene con i team e sono sempre disposta ad
                aiutare se ne sono in grado e penso di poter aggiungere un
                qualcosa in più con la persona che sono.🤝​💼​
              </p>{' '}
              <p>✨ Il mio sogno è quello di sviluppare un mio videogioco 🎮</p>
            </>
          ) : (
            <>
              <p>
                I'm a Full Stack Developer:
                <br />I create dynamic and functional web applications, from
                database and API development to the creation off web interfaces,
                using th emost effective and modern developments methods learned
                while studying at EPICODE.🌐​🛠️
              </p>
              <p>
                👥I'm a serious and accurate person, I am committed and always
                eager to learn and improve myself. At work, I always give my
                best. I enjoy working in a team and engaging with others. I fit
                well with teams and I'm always willing to help if I'm able to. I
                believe I can add something extra with the person that I am.
                🤝​💼​
              </p>{' '}
              <p>✨ My dream is to develop my own videogame 🎮</p>
            </>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Cover
