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
    players: null,
    numPlayersActive: null,
    numPlayersFolded: null,
    numPlayersAllIn: null,
    activePlayerIndex: null,
    dealerIndex: null,
    blindIndex: null,
    deck: null,
    communityCards: [],
    pot: null,
    highBet: null,
    betInputValue: null,
    sidePots: [],
    minBet: 20,
    phase: 'loading',
    playerHierarchy: [],
    showDownMessages: [],
    playActionMessages: [],
    playerAnimationSwitchboard: {
      0: { isAnimating: false, content: null },
      1: { isAnimating: false, content: null },
      2: { isAnimating: false, content: null },
      3: { isAnimating: false, content: null },
      4: { isAnimating: false, content: null },
      5: { isAnimating: false, content: null },
    },
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

  renderActionButtons = () => {
    return (
      <React.Fragment>
        <button
          className="action-button"
          onClick={() => this.handleBetInputSubmit()}
        >Call</button>
        <button className="fold-button" onClick={() => this.handleFold()}>
          Fold
        </button>
      </React.Fragment>
    );
  };

  renderShowdown = () => {};

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
          <div className="pot-container">
            <img
              style={{ height: 55, width: 55 }}
              src={'./assets/pot.svg'}
              alt="Pot Value"
            />
          </div>
        </div>

        <div className="game-action-bar">
          <div className="action-buttons">{this.renderActionButtons()}</div>
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
