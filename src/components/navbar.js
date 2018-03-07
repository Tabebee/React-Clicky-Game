import React, { Component } from 'react';
import Navscore from './nav-score';
import Navmessage from './nav-message';

const Navbar = ( {score, highscore, message} ) => {
    return (
        <nav className='navbar navbar-dark bg-dark navbar-center fixedTop '>
            <div>React Clicky Game </div>  {/* This is purposely done to center the next content */}
            <div>
                <Navmessage message={ message } />
            </div>
            <Navscore className='right'
                      score={ score }
                      highscore={ highscore }
            />
        </nav>
    )
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
