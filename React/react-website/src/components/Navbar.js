import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './Navbar.css';
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom';
import { GoThreeBars } from "react-icons/go";
import { MdClose } from 'react-icons/md';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }
    useEffect(() => { showButton() }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}><img src={logo} /></Link>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <MdClose /> : <GoThreeBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link 
                            to='/' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                                Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link 
                            to='/our-team' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                                Our Team</Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/listings'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >Listings</Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/testimonials'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >Testimonials</Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/sold'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >Sold</Link>
                    </li>                   
                    <li>
                        <Link
                            to='/contact-us'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >Contact Us</Link>
                    </li>
                </ul>
                {button && <Button link='/contact-us' buttonStyle='btn--outline'>CONTACT US</Button>}
            </nav>
        </>
    )
}

export default Navbar;
