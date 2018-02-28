import React from 'react';
import Navmesaage from './nav-message-text'

const Navbar = () => {
    return (
            <nav className='navbar navbar-dark bg-dark navbar-center'>
                <div> </div>  {/* This is purposely done to center the next content */}
                <div> nav </div>
                <Navmesaage className='right'/>
            </nav>
    )
}

export default Navbar;
