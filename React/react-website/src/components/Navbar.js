import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaTypo3 } from 'react-icons/fa';
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
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>TRVL <FaTypo3 className='fa-typo3' /></Link>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <MdClose /> : <GoThreeBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
              </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/services'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >Services</Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/products'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >Products</Link>
                    </li>

                    <li>
                        <Link
                            to='/sign-up'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >Sign Up</Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </nav>
        </>
    )
}

export default Navbar;
