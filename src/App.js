import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pictures from './picture-cards.json';

//  Components
import Jumbotron from './components/jumbotron';
import Navbar from './components/navbar';
import Picturelist from './components/picturelist';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pictures,
            selectedPictures: [],
            score: 0,
            highscore: 0
        };

        const shufflefunction = (shuffleme) => {
            //  The Fisher-Yates (aka Knuth) shuffle algorithm
            let currentIndex = shuffleme.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = shuffleme[currentIndex];
                shuffleme[currentIndex] = shuffleme[randomIndex];
                shuffleme[randomIndex] = temporaryValue;
            }
            return shuffleme;
        }
        shufflefunction(this.state.pictures);
    }

  render() {
    return (
        <div>
            <Navbar
                score = { this.state.score }
                highscore = { this.state.highscore } />
            <Jumbotron />
            <Picturelist
                pics={ this.state.pictures }
                score={ this.state.score }
                highscore={ this.state.highscore }
                onImageSelect={ (image, score, highscore) => {
                    this.setState({ image });
                    this.setState({ score });
                    this.setState({ highscore });
                    }
                } // close onImageSelect
            />
        </div>
    );
  }
}

export default App;
