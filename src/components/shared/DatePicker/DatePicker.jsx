import React from 'react';

//import styling
import './DatePicker.css';

//import picture
import Location from '../../../../assets-src/DatePicker/Location.png';

//import Framework7 grid-components
import {
  Block,
  Row,
  Col,
  Button
} from 'framework7-react';

//for styling purposes
 const styling = {
  backgroundColor: 'black',
  color: 'white',
  border: '1px solid #c08d42',
  marginBottom: '10px',
};

const inputStyling = {
  backgroundColor: 'black',
  color: 'white',
  border: '1px solid #c08d42',
  width: '100%', 
  marginBottom: '15px',
  borderRadius: '5px'
};

const datePicker = (props) => (
  <Block className="dateGrid">
    <Row>
      <Col><span className="dateContent">Dato start:</span></Col>
      <Col><span className="dateContent">&nbsp;&nbsp;Dato slutt:</span>
      </Col>
    </Row>
    <Row>
    <Col>
    <Button style={styling}><span className="dateContent">1</span></Button>
    </Col>
    <Col>
   <Button style={styling}><span className="dateContent">2</span></Button>
    </Col>
    <Col>
    <Button style={styling}><span className="dateContent">2019</span></Button>
    </Col>
    {":"}
      <Col>
    <Button style={styling}><span className="dateContent">2</span></Button>
    </Col>
    <Col>
    <Button style={styling}><span className="dateContent">2</span></Button>
    </Col>
    <Col>
    <Button style={styling}><span className="dateContent">2019</span></Button>
    </Col>
    </Row>
    <Row style={{width: '50%'}}>
    <Col>
    <span className="dateContent">Kl. start:</span>
      </Col>
      <Col>
      <span className="dateContent">&nbsp;&nbsp;Kl.slutt</span>
      </Col>
    </Row>
    <Row style={{width: '50%'}}>
    <Col>
      <Button style={styling}><span className="dateContent">12</span></Button>
    </Col>
    <Col>
      <Button style={styling}><span className="dateContent">30</span></Button>
    </Col>
    {":"}
    <Col>
      <Button style={styling}><span className="dateContent">14</span></Button>
    </Col>
    <Col>
      <Button style={styling}><span className="dateContent">30</span></Button>
    </Col>
    </Row>
    <Row>
      <Col>
     <textarea className="dateDesc" type="text" maxLength={300} style={inputStyling} placeholder="Placeholder" />
     </Col>
    </Row>
    <Row>
      <Col style={{width: '25%'}}><span className="datePic"><img src={Location}/></span></Col>
    </Row>
  </Block>
  );

export default datePicker;