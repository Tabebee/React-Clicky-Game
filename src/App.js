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

    handleThis = (name) => {
        // this.setState({ message: "message changing" });
        this.shufflefunction();
        const selectedName = name;
        const statePictures = this.state.selectedPictures;
        let oldScore = this.state.score;
        let oldHighScore = this.state.highscore;

        if (statePictures.length === 0) {
            statePictures.push(selectedName);
            let score = oldScore + 1;
            this.setState({ score, selectedPictures: statePictures, message: "Yay First Point!" });
            console.log("first ",statePictures);
            console.log("score ", this.state.score);
            return;
        } else if (statePictures.length > 0) {
            for (let i = 0; i < statePictures.length; i++) {
                if (selectedName === statePictures[i]) {
                    console.log("whoops");
                    if (oldScore > oldHighScore) {
                        let score = 0;
                        this.setState({ score, highscore: oldScore, selectedPictures: [], message: "New High Score!!!" });
                        console.log(this.state);
                        return;
                    } else {
                        let score = 0;
                        this.setState({ score, selectedPictures: [], message: "Whoops! Care to try again?" });
                        console.log(this.state);
                        return;
                    }
                } else {
                    statePictures.push(selectedName);
                    let score = oldScore + 1;
                    this.setState({ score, selectedPictures: statePictures, message: "Keep it up!" });
                    console.log("third ",statePictures);
                    console.log("score ", this.state.score);
                    return;
                }
            }
        }


        // // if (statePictures.length === 0) {
        // //     statePictures.push(selectedName);
        // //     this.setState({ selectedPictures: statePictures });
        // // } else {
        //     for (let i = 0; i < statePictures.length; i++) {
        //         if (selectedName === statePictures[i]) {
        //             this.setState({ message: "Sorry", selectedPictures: [] })
        //         } else {
        //             statePictures.push(selectedName);
        //             this.setState({ selectedPictures: statePictures });
        //             // this.shufflefunction();
        //         }
        //     }
        //}
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
