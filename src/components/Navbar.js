import React from 'react';
import './Components.css'



const Navbar = () => {
    return (
        <div justify-contect='space-between'>   
            <a href='/About'>About</a>
            <a href='/Project'>Project</a>
            <a href='/Contact'>Contact</a>
            <a href='/Resume'>Resume</a>
        </div>
    )
}

export default Navbar;