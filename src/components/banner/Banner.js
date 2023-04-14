import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { TypeAnimation } from 'react-type-animation';
import headderImg from "../../assets/img/herno2.png";
import './Banner.css';

export const Banner = () => {

    return (
        <section className="banner" id="banner">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div>
                            {/* <span className="tagline">Welcome to my Portfolio</span> */}
                            {/* <h1>{"Hello. \nI'm Hernán! "}<span className="wrap">{text}</span></h1> */}
                            <h1>{"Hello. \nI'm Hernán! "}</h1>
                            <TypeAnimation
                                sequence={[
                                    'Web & Mobile Developer',
                                    2000, // Waits 1s
                                    'Full Stack Developer', 
                                    2000, // Waits 2s
                                    'Game Developer',
                                    2000,
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                deletionSpeed={50}
                                // style={{ fontSize: '3em', display: 'inline-block' }}
                            />
                            {/* <span className="wrap">{text}</span> */}
                            <p>I'm a Full Stack Developer based in Argentina. Addicted to coffee and coding nights.
                                Passionate in Software Development, Fútbol, Videogames and Music.</p>
                            <button onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '#connect';
                            }}>Let's connect <ArrowRightCircle size={25} /></button>
                        </div>
                        {/* <TrackVisibility>
                        {
                            ({isVisible}) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{"Hi, I'm Hernan, "}<span className="wrap">{text}</span></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                            </div>
                        }
                        </TrackVisibility> */}
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img className="headderImg" src={headderImg} alt="header-img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}