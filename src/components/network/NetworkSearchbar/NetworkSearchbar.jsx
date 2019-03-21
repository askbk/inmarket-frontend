import React from 'react';
import {Searchbar} from 'framework7-react';
import './NetworkSearchbar.css';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    return (
      <div className="SearchBarContainer">
        <Searchbar placeholder="Søk etter personer, aktiviteter eller tjenester"/>
      </div>
    );
  }
}
