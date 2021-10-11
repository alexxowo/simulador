import React, {useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Slider from './components/slider'

import './App.css'

function App() {

  const [prueba, setPrueba] = useState(0);

  const handleChange = (value) => {
    setPrueba(value)
  }

  return (
    <Container>
      <Row>
        <Col >
          <div className="content">
            <div className="header">
              <h3 className="mainTitle">Simulador de Consumo de datos</h3>
              <p>{prueba}</p>
            </div>
            <hr/>
            <div className="body">
              <Slider title="Prueba" max="360" type="mensajes" multiplier="0.02" onChangeValue={handleChange} />
              <Slider title="Prueba" max="360" type="mensajes" multiplier="0.02" onChangeValue={handleChange} />
            </div>
            <hr/>
            <div className="footer">
              // footer
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
