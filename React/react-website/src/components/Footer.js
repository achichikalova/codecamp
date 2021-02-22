import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg'
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaYoutubeSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    We would love to prepare house hunting trip for you.</p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email' />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                    <p className='footer-subscription-text'>
                        You can unsubscribe at any time.</p>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/testimonials'>Testimonials</Link>
                        <Link to='/privacy-policy'>Privacy Policy</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/contact-us'>Contact</Link>
                        <Link to='/'>Support</Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'><img src={logo} />
                        </Link>
                    </div>
                    <small class='website-rights'>© 2021 DETAILS REALTY INC. Brokerage</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='https://www.facebook.com/AlvinaUsherRealEstateSalesrepresentative/'
                            target='_blank'
                            aria-label='Facebook'>
                            <FaFacebookSquare />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'>
                            <FaInstagramSquare />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='https://www.youtube.com/channel/UC-I58Qietv1st2U7f90JPKA'
                            target='_blank'
                            aria-label='Youtube'>
                            <FaYoutubeSquare />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='https://twitter.com/alvina_usher'
                            target='_blank'
                            aria-label='Twitter'>
                            <FaTwitterSquare />
                        </Link>
                        <Link
                            class='social-icon-link linkedin'
                            to='https://www.linkedin.com/in/alvina-usher-6b180420/'
                            target='_blank'
                            aria-label='LinkedIn'>
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;