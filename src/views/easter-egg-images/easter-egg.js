import React, { Component }  from 'react';
import './easter-egg.css';
import team from './images/summer/summerfest.jpg'
import image10 from './images/summer/10.jpg'
import image20 from './images/summer/20.jpg'
import image40 from './images/summer/40.jpg'
import image60 from './images/summer/60.jpg'
import image80 from './images/summer/80.jpg'
import image100 from './images/summer/100.jpg'

class EasterEgg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    }
  }

  getImage() {
    if (this.props.numberOfClick < 10) {
      return team;
    } else if (this.props.numberOfClick < 20) {
        return image10;
    } else if (this.props.numberOfClick < 40) {
        return image20;
    } else if (this.props.numberOfClick < 60) {
        return image40;
    } else if (this.props.numberOfClick < 80) {
      return image60;
    } else if (this.props.numberOfClick < 100) {
      return image80;
    } else if (this.props.numberOfClick >= 100) {
      return image100;
    } else {
      return team;
    }
  }

  render() {
    return (
      <div>
        <img src={this.getImage()} className="easter-egg-image" alt=""/>
      </div>
    );
  }
}

export default EasterEgg;
