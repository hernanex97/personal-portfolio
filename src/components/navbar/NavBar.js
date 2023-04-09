import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/img/logo.svg';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import React from 'react';
import './NavBar.css';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    },
        [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <section id="home">
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className='navbar-toggler-icon'></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                            <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>Let's Connect</Nav.Link>
                        </Nav>
                        <span className='navbar-text'>
                            <div className='social-icon'>
                                <a href="https://www.linkedin.com/in/expositohernan/" target="_blank" rel="noreferrer noopener"><img src={navIcon1} alt="" ></img></a>
                                {/* <a href="https://www.instagram.com/hernan_exposito/" target="_blank" rel="noreferrer noopener"><img src={navIcon3} alt="" ></img></a> */}
                            </div>
                            {/* <button href="#connect" className='vvd' onClick={() => onUpdateActiveLink('connect')}><span>Let's Connect</span></button> */}
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    )
}

export default NavBar;