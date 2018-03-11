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
            message: 'Lets Do This',
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

    //  Grab the highscore and score from state and set them to variables
    //  if answer wrong, grab score again
    //      if the score is greater than highscore set highscore state = score and reset score state to 0
    //      if the score is less than highscore reset score state to 0

    handleThis = (name) => {
        // this.setState({ message: "message changing" });
        this.shufflefunction();
        const selectedName = name;
        const statePictures = this.state.selectedPictures;
        let newStatePictures = [];
        statePictures.map(item => newStatePictures.push(item));
        let oldScore = this.state.score;
        let oldHighScore = this.state.highscore;
        let checker;

        if(statePictures.length === 0) {
            newStatePictures.push(selectedName);
            const message = "First point. Keep it up!!!";
            this.setState({ selectedPictures: newStatePictures, score: oldScore + 1, message });
        } else if(statePictures.length > 0) {
        //    Check if selected image is in the state allready
            newStatePictures.map(mapItem => {
                if (mapItem === selectedName) {
                    checker = "nope";
                }
            });
        //    if item is already in state they lose
            if ( (checker === "nope") && (oldScore > oldHighScore) ) {
                const message = "Whoops!!! Care to try again?";
                this.setState({ selectedPictures: [], highscore: oldScore, score: 0, message });
            } else if (checker === "nope") {
                const message = "Whoops!!! Care to try again?";
                newStatePictures.push(selectedName);
                this.setState({ selectedPictures: [], score: 0, message })
            }
            //  if right
                // if right and new high score
            else if (oldScore >= oldHighScore) {
                newStatePictures.push(selectedName);
                const message = "New High Score!!!";
                const score = oldScore + 1;
                this.setState({ selectedPictures: newStatePictures, score, highscore: score, message })
            } else {
                newStatePictures.push(selectedName);
                const message = "Nice";
                this.setState({ selectedPictures: newStatePictures, score: oldScore + 1, message })
            }
        }

        console.log("getting here?", this.state);
    }

  render() {
    return (
        <div>
            <Navbar
                score = { this.state.score }
                highscore = { this.state.highscore }
                message={ this.state.message }
            />
            <Jumbotron />
            <div className='inBackground'>
            <Picturelist
                pics={ this.state.pictures }
                score={ this.state.score }
                highscore={ this.state.highscore }
                onImageSelect= { this.handleThis }
            />
            </div>
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


