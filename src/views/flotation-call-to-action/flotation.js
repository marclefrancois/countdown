import React, { Component } from 'react';
import './flotation.css';
import FlotationItem from './item.png'

class Flotation extends Component {
  render() {
    return (
      <div>
        <div className="countdown-call-to-action-container">
          <div className="countdown-call-to-action">Sois le party! 🏊‍♂️☀️😎🍻🎸🍷🏐</div>
          <img className="countdown-item-image" src={FlotationItem} onClick={this.props.onClickItem} alt="Item de flotaison"/>
        </div>
      </div>
    );
  }
}

export default Flotation;
