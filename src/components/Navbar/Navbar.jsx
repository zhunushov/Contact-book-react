import React from 'react';
import "./Navbar.css"
const Navbar = () => {
    return (
        <nav className='navbar'>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHiEmIbGWGXBYnqqvVPXr9O1Lt3w7rrntCig&usqp=CAU" alt="" />
         <a href="#"><li>Address</li></a>
         <a href="#"><li>Gmail</li></a>
         <a href="#"><li>Gallery</li></a>
         <a href="#"><li>Book</li></a>
         <a href="#"><li>Person</li></a>
        </nav>
    );
};

export default Navbar;