import React from 'react';
import {Button} from 'framework7-react';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    const divStyle = {
      background: 'black'
    };

    return (
      <div className="row">
        <div className="col-12">
          <Button style={divStyle} fill>Aksepter</Button>
          <Button fill>Ikke Aksepter</Button>
        </div>
      </div>
    );
  }
}
