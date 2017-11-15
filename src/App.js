import React, { Component } from 'react';
import './App.css';
import CountdownBox from './views/countdown-box/countdown-box'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: 'official.jpg'
    }
  }

  componentDidMount() {
    this._setBackgroundStyle()
    this.timerID = setInterval(
      () => this._tick(),
      10000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  _tick() {
    this.setState({
      imageUrl: 'winterfest2017.jpg'
    });
    this._setBackgroundStyle()
    clearInterval(this.timerID);
  }

  _setBackgroundStyle() {
    const imageUrl =`url(${this.state.imageUrl})`;
    this.setState({
      backgroundStyle : {
        backgroundImage : imageUrl,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    });
  }

  render() {
    return (
      <div className="App" style={this.state.backgroundStyle}>
        <CountdownBox/>
      </div>
    );
  }
}

export default App;
