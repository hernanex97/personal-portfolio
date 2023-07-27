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
                            />
                            <p>Based in Argentina. Addicted to coffee and coding nights. Passionate about Software Development ❤ I'm currently working at IBM.</p>
                            <button onClick={(e) => {
                                e.preventDefault();
                                window.location.href = '#connect';
                            }}>Let's connect <ArrowRightCircle size={25} /></button>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img className="headderImg" src={headderImg} alt="header-img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}