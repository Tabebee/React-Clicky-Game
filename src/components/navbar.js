import React, { Component } from 'react';
import Navmesaage from './nav-message-text'

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            score: 0,
            highscore: 0
        };
    }

    render() {
        return (
            <nav className='navbar navbar-dark bg-dark navbar-center'>
                <div> </div>  {/* This is purposely done to center the next content */}
                <div> nav </div>
                <Navmesaage className='right'/>
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
