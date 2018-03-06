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
        this.shufflefunction = this.shufflefunction.bind(this);
        this.shufflefunction();

    }

    shufflefunction () {
        const shuffleme = this.state.pictures;

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

    handleThis = (name, image) => {
        console.log("name", name);
        console.log("image", image);
        this.setState({ selectedPictures: name });
        this.shufflefunction();

        console.log("this handle", this);
    }

  render() {
      console.log("this ", this);
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
                onImageSelect= { this.handleThis }

                // close onImageSelect
            />
        </div>
    );
  }
}

export default App;


//  Pass selected image back to app
//  Handle logic with function
//  Create if else to either setState or
//      .push to array and increment count
//      else will reset the game
//      message will appear for both with animation
