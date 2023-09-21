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

  renderGame = () => {};
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
