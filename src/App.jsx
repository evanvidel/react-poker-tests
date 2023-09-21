import React, { Component } from 'react';
import './App.css';
import './Poker.css';

import Spinner from './Spinner';
import WinScreen from './WinScreen';

class App extends Component {
  state = {
    loading: true,
    winnerFound: null,
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
