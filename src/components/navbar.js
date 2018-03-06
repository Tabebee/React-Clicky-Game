import React, { Component } from 'react';
import Navscore from './nav-score';
import Navmessage from './nav-message';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: this.props.message,
            score: this.props.score,
            highscore: this.props.highscore
        };
    }

    render() {
        return (
            <nav className='navbar navbar-dark bg-dark navbar-center fixedTop '>
                <div>React Clicky Game </div>  {/* This is purposely done to center the next content */}
                <div>
                    <Navmessage message={ this.state.message } />
                </div>
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
