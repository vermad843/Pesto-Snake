import React, { Component } from 'react';
import '../App.css';
import Board from './Board';

class Game extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {
        return (
            <div className="game">
              
              <div className="game-board">
              <Board />
              </div>
            </div>
        );
    }
}

export default Game;