import { Button, Col, Container, Row } from 'react-bootstrap'
import { MdOutlineFileDownload } from 'react-icons/md'

const Cover = () => {
  return (
    <Container className="my-5 ">
      <Row className="d-flex flex-column flex-lg-row border-cover p-2 ">
        <Col className="col-12 col-lg-4 d-flex flex-column text-center my-2 justify-content-center align-items-center ">
          <div>img</div>
          <div>
            <Button>
              Download CV <MdOutlineFileDownload className="color" />
            </Button>
          </div>
        </Col>
        <Col className="col-12 col-lg-8 my-1">
          <p>
            Sono una giovane Full Stack Developer:
            <br />
            creo applicativi web dinamici e funzionali a partire dallo sviluppo
            dei database e API alla creazione di interfacce Web utilizzando i
            metodi più efficaci e moderni per lo sviluppo appresi studiando
            presso EPICODE.🌐​🛠️
          </p>
          <p>
            👥Sono una persona seria, puntuale, mi impegno e ho sempre voglia di
            imparare e migliorarmi. Nel lavoro metto sempre tutta me stessa, mi
            piace lavorare in team e confrontarmi con gli altri. Mi integro bene
            con i team e sono sempre disposta ad aiutare se ne sono in grado e
            penso di poter aggiungere un qualcosa in più con la persona che
            sono.🤝​💼​
          </p>{' '}
          <p>
            I miei valori fondamentali: equità, integrità, onestà, libertà e
            rispetto. 🌈💖
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Cover
