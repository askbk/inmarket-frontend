import React from 'react';
import {Searchbar} from 'framework7-react';
import './NetworkSearchbar.css';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    //Få component til å rerendres ved resizing av vindu
    const isMobile = window.innerWidth < 540;

    const placeholder= isMobile ? "Søk etter personer" : "Søk etter personer, aktiviteter eller tjenester";

    return (
      <div className="SearchBarContainer">
        <Searchbar placeholder={placeholder}/>
      </div>
    );
  }
}
