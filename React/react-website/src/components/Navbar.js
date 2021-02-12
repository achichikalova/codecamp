import React, { useState } from 'react';
import Button from './Button';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { FaTypo3 } from 'react-icons/fa';
import { GoThreeBars } from "react-icons/go";
import { GrClose } from 'react-icons/gr'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 900) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)

    const menu = [
        { name: 'Home', link: 'home' },
        { name: 'Services', link: 'services' },
        { name: 'Portfolio', link: 'portfolio' },
        { name: 'Sign-In', link: 'sign-in' },
    ]

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">TRVL <FaTypo3 className='fa-typo3' /></Link>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <GrClose /> : <GoThreeBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {menu.map((item) => {
                        return <li className='nav-item'>
                            <Link
                                to='/'
                                className='nav-links {item.link}'
                                onClick={closeMobileMenu}>
                                {item.name}
                            </Link>
                        </li>
                    })}
                </ul>
                {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
            </nav>
        </>
    )
}

export default Navbar;
