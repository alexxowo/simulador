import React, {useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Slider from '../slider'

import logo from '../../images/cropped-Group-39@2x.png'

const Dashboard = () => {

  const [totalConsume, setTotalConsume] = useState(0);
  
  /* Estado de los componentes */
  const [consumeSocialMediaText, setConsumeSocialMediaText] = useState(0);
  const [consumeSocialMediaImage, setConsumeSocialMediaImage] = useState(0);
  const [consumeMessageText, setConsumeMessageText] = useState(0);
  const [consumeMessageImage, setConsumeMessageImage] = useState(0);
  const [consumeMessageVideo, setConsumeMessageVideo] = useState(0);
  const [consumeMessageVoice, setConsumeMessageVoice] = useState(0);
  const [consumeMessageCalls, setConsumeMessageCalls] = useState(0);
  const [consumeMessageVideoCall, setConsumeMessageVideoCall] = useState(0);
  const [consumeMusicStream, setConsumeMusicStream] = useState(0);
  const [consumeVideoStream, setConsumeVideoStream] = useState(0);
  const [consumeMovies, setConsumeMovies] = useState(0);
  const [consumeEmails, setConsumeEmails] = useState(0);
  const [consumeEmailsNoAttached, setConsumeEmailsNoAttached] = useState(0);
  const [consumeNavigation, setConsumeNavigation] = useState(0);
  const [consumeMaps, setConsumeMaps] = useState(0)


  const handleClick = () => {
    let sum = consumeNavigation + consumeSocialMediaImage + consumeMessageText + consumeMessageVideo + consumeMessageImage +
              consumeSocialMediaText + consumeMessageVoice + consumeMessageCalls + consumeMessageVideoCall + consumeMusicStream +
              consumeVideoStream + consumeMovies + consumeEmails + consumeEmailsNoAttached + consumeMaps;

    window.scrollTo(0,0)
    setTotalConsume(sum.toFixed(2))
  }

  return (
    <>
      <Container className="con">
        <Row>
          <Col >
            <div className="content">
              <div className="header">
                <img src={logo} alt="Besser logo" className="logo" />
                <h3 className="mainTitle">Simulador de Consumo de datos</h3>
                <p><span className="red-label">*</span> Para calcular el consumo aproximado, ajuste los siguientes valores y haga click en calcular.</p>
                <p>El Consumo es de:</p>
                <h2>{totalConsume}MB</h2>
              </div>
              <hr/>
              <div className="sliders_components_container">
                <Slider key="0" title="Publicacion en redes Sociales (Solo texto)" max="100" type="Posts" multiplier="0.2" onChangeValue={setConsumeSocialMediaText} />
                <Slider key="1" title="Publicaciones en redes sociales (Imagenes)" max="100" type="Posts" multiplier="0.5" onChangeValue={setConsumeSocialMediaImage} />
                <Slider key="2" title="Mensajeria Instantanea (solo texto)" max="500" type="Mensajes" multiplier="0.348" onChangeValue={setConsumeMessageText} />
                <Slider key="3" title="Mensajeria Instantanea (Imagenes)" max="500" type="Mensajes" multiplier="0.1" onChangeValue={setConsumeMessageImage} />
                <Slider key="4" title="Mensajeria Instantanea (Video)" max="500" type="Mensajes" multiplier="7" onChangeValue={setConsumeMessageVideo} />
                <Slider key="5" title="Mensajeria Instantanea (Notas de voz)" max="500" type="Mensajes" multiplier="0.22" onChangeValue={setConsumeMessageVoice} />
                <Slider key="6" title="Llamadas por mensajeria Instantanea" max="360" type="Minutos" multiplier="2.1" onChangeValue={setConsumeMessageCalls} />
                <Slider key="7" title="Videollamadas" max="360" type="Minutos" multiplier="4.1" onChangeValue={setConsumeMessageVideoCall} />
                <Slider key="8" title="Musica via streaming" max="360" type="Minutos" multiplier="1.1" onChangeValue={setConsumeMusicStream} />
                <Slider key="9" title="Video via streaming" max="360" type="Minutos" multiplier="5.1" onChangeValue={setConsumeVideoStream} />
                <Slider key="10" title="Series y peliculas en linea" max="360" type="Minutos" multiplier="5" onChangeValue={setConsumeMovies} />
                <Slider key="11" title="Mapas" max="360" type="Minutos" multiplier="0.1" onChangeValue={setConsumeMaps} />
                <Slider key="12" title="Correos enviados/Recibidos (Sin archivos adjuntos)" max="1000" type="Correos" multiplier="0.003" onChangeValue={setConsumeEmails} />
                <Slider key="13" title="Correos enviados/Recibidos (Con archivos adjuntos)" max="1000" type="Correos" multiplier="0.3" onChangeValue={setConsumeEmailsNoAttached} />
                <Slider key="14" title="Navegacion Web" max="360" type="Minutos" multiplier="0.4" onChangeValue={setConsumeNavigation} />
              </div>
              <button className="btn btn-primary calculate" onClick={handleClick}>Calcular</button>
              <hr/>
              <div className="footer">
                <div className="alert alert-warning">
                  El valor obtenido en este simulador es <strong>APROXIMADO</strong>, el valor real puede variar segun el tiempo de uso, y a que servicios se conecte.
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard