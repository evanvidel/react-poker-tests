import React, { Component } from 'react';
import './App.css';
import './Poker.css';

import Spinner from './Spinner';
import WinScreen from './WinScreen';
/* descobrir como passar para outra pagina */

class App extends Component {
  state = {
    loading: true,
    winnerFound: null,
  };

  async componentDidMount() {
    const imageLoaderRequest = new XMLHttpRequest();

    imageLoaderRequest.addEventListener('load', (e) => {
      console.log(`${e.type}`);
      console.log(e);
      console.log('Image Loaded!');
      this.setState({ loading: false });
    });

    imageLoaderRequest.open('GET', './assets/table-nobg-svg-01.svg');
    imageLoaderRequest.send();
  }

  renderGame = () => {
    return (
      <div className="poker-app--background">
        <div className="poker-table--container">
          <img
            className="poker-table--table-image"
            src={'./assets/table-nobg-svg-01.svG'}
            alt="Poker Table"
          />
          <div className="community-card-container"></div>
          <div className="pot-container"></div>
        </div>

        <div className="game-action-bar">
          <div className="action-buttons"></div>
          <div className="slider-boi"></div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div className="App">
        <div className="poker-table--wrapper">
          {this.state.loading ? (
            <Spinner />
          ) : this.state.winnerFound ? (
            <WinScreen />
          ) : (
            this.renderGame()
          )}
        </div>
      </div>
    );
  }
}

export default App;
