import React, { Component }  from 'react';
import './easter-egg.css';
import team from './images/summer/summerfest.jpg'
import good1 from './images/summer/good1.jpg'
import good2 from './images/summer/good2.jpg'
import good3 from './images/summer/good3.jpg'
import good4 from './images/summer/good4.jpg'
import image10 from './images/summer/10.jpg'
import image20 from './images/summer/20.jpg'
import image30 from './images/summer/30.jpg'
import image40 from './images/summer/40.jpg'
import image50 from './images/summer/50.jpg'
import image60 from './images/summer/60.jpg'
import image70 from './images/summer/70.jpg'
import image80 from './images/summer/80.jpg'
import image90 from './images/summer/90.jpg'
import image100 from './images/summer/100.jpg'
import image110 from './images/summer/110.jpg'
import image120 from './images/summer/120.jpg'
import image130 from './images/summer/130.jpg'
import image140 from './images/summer/140.jpg'
import image150 from './images/summer/150.jpg'
import image160 from './images/summer/160.jpg'
import image170 from './images/summer/170.gif'
import image180 from './images/summer/180.jpg'
import image190 from './images/summer/190.jpg'
import image200 from './images/summer/200.jpg'

class EasterEgg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    }
  }

  getImage() {
    const imagesMontrable = [
      team,
      image10,
      good1,
      image20,
      good2,
      image190,
      good3,
      image40,
      good4,
      image90,
      image100,
      
    ]
    const imagesLouche = [
      image50,
      image80,
      image200,
      image70,
      image110,
      image30,
      image180,
      image140,
      image60,
      image120, 
      image130,
      image150,
      image160, 
      image170,
    ]
    const multiplier = 2
    if (this.props.numberOfClick > 0 && this.props.numberOfClick < (imagesLouche.length * multiplier)) {
      return imagesLouche[Math.floor(this.props.numberOfClick/multiplier)];
    } else {
      return imagesMontrable[Math.floor(Math.random() * imagesMontrable.length)];
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
