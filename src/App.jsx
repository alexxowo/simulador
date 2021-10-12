import React, {useState} from 'react'
import {Container, Row, Col, Alert} from 'react-bootstrap'
import Slider from './components/slider'

import './App.css'

function App() {

  const [totalConsume, setTotalConsume] = useState(0);
  
  const handleChange = (value) => {
    setTotalConsume(value)
  }

  return (
    <Container>
      <Row>
        <Col >
          <div className="content">
            <div className="header">
              <h3 className="mainTitle">Simulador de Consumo de datos</h3>
              <p><span className="red-label">*</span> Para calcular el consumo aproximado, ajuste los siguientes valores y haga click en calcular.</p>
              <p>El Consumo es de:</p>
              <h2>{totalConsume}</h2>
            </div>
            <hr/>
            <div className="sliders_components_container">
              <Slider title="Publicacion en redes Sociales (Solo texto)" max="100" type="Posts" multiplier="0.2" onChangeValue={handleChange} />
              <Slider title="Publicaciones en redes sociales (Imagenes)" max="100" type="Posts" multiplier="0.5" onChangeValue={handleChange} />
              <Slider title="Mensajeria Instantanea (solo texto)" max="500" type="Mensajes" multiplier="0.348" onChangeValue={handleChange} />
              <Slider title="Mensajeria Instantanea (Imagenes)" max="500" type="Mensajes" multiplier="0.1" onChangeValue={handleChange} />
              <Slider title="Mensajeria Instantanea (Video)" max="500" type="Mensajes" multiplier="7" onChangeValue={handleChange} />
              <Slider title="Mensajeria Instantanea (Notas de voz)" max="500" type="Mensajes" multiplier="0.22" onChangeValue={handleChange} />
              <Slider title="Llamadas por mensajeria Instantanea" max="360" type="Minutos" multiplier="2.1" onChangeValue={handleChange} />
              <Slider title="Videollamadas" max="360" type="Minutos" multiplier="4.1" onChangeValue={handleChange} />
              <Slider title="Musica via streaming" max="360" type="Minutos" multiplier="1.1" onChangeValue={handleChange} />
              <Slider title="Video via streaming" max="360" type="Minutos" multiplier="5.1" onChangeValue={handleChange} />
              <Slider title="Series y peliculas en linea" max="360" type="Minutos" multiplier="5" onChangeValue={handleChange} />
              <Slider title="Mapas" max="360" type="Minutos" multiplier="0.1" onChangeValue={handleChange} />
              <Slider title="Correos enviados/Recibidos (Sin archivos adjuntos)" max="1000" type="Correos" multiplier="0.003" onChangeValue={handleChange} />
              <Slider title="Correos enviados/Recibidos (Con archivos adjuntos)" max="1000" type="Correos" multiplier="0.3" onChangeValue={handleChange} />
              <Slider title="Navegacion Web" max="360" type="Minutos" multiplier="0.4" onChangeValue={handleChange} />
            </div>
            <button className="btn btn-primary calculate">Calcular</button>
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
  );
}

export default App;
