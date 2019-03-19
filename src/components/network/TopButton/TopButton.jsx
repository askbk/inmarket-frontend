import {Button} from 'framework7-react';
import './Buttons.css'

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    return (
      <div className="buttonsContainer">
        <Button className="svartButton" fill>Aksepter</Button>
        <Button fill>Ikke Aksepter</Button>
      </div>
    );
  }
}
