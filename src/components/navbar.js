import React, { Component } from 'react';
import Navscore from './nav-score'

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            score: this.props.score,
            highscore: this.props.highscore
        };
    }

    render() {
        return (
            <nav className='navbar navbar-dark bg-dark navbar-center fixedTop '>
                <div>React Clicky Game </div>  {/* This is purposely done to center the next content */}
                <div> message goes here </div>
                <Navscore className='right'
                          score={this.state.score}
                          highscore={this.state.highscore}
                />
            </nav>
        )
    }
}




// const Navbar = () => {
//     return (
//             <nav className='navbar navbar-dark bg-dark navbar-center'>
//                 <div> </div>  {/* This is purposely done to center the next content */}
//                 <div> nav </div>
//                 <Navmesaage className='right'/>
//             </nav>
//     )
// }

export default Navbar;
