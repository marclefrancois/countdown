import React, { Component } from 'react';
import './CountdownBox.css';
import MiregoLogo from '../../images/mirego.png'
import FlotationItem from '../../images/item.png'
import Ticker from '../countdown-ticker/ticker'

class CountdownBox extends Component {
  render() {
    return (
      <div className="countdown-box">
        <img className="countdown-image" src={MiregoLogo} alt="Logo de Mirego"/>
        <div className="countdown-title">Le Summerfest est dans</div>
        <Ticker/>
        <div className="countdown-call-to-action-container">
          <div className="countdown-call-to-action">N'oublie pas ton item!</div>
          <img className="countdown-item-image" src={FlotationItem} alt="Item de flotaison"/>
        </div>
        <a className="countdown-amazon-link" href="https://www.amazon.ca/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=inflatable&rh=i%3Aaps%2Ck%3Ainflatable">Poigne toi s'en un sur Amazon</a>
      </div>
    );
  }
}

export default CountdownBox;
