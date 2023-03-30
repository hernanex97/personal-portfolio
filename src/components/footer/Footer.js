import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "../mailchimp_form/Mailchimp";
import logo from "../../assets/img/logo.svg";
import navIcon1 from '../../assets/img/nav-icon1.svg';
import React from 'react';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    {/* <MailchimpForm/> */}
                    <Col sm={6}>
                        <img src={logo} alt="Logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/expositohernan/" target="_blank" rel="noreferrer noopener"><img src={navIcon1} alt="" ></img></a>
                        </div>
                       <p>Copyright 2023. All Right Reserved</p> 
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}