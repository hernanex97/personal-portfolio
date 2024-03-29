import React from 'react';
import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import sendMailGif from "../../assets/img/send-email.gif";
require('./Contact.css');

export const Contact = ({ title, description, imgUrl }) => {

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let statusCode = 0;
        await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formDetails),
        }).then(data => {
            statusCode = data.status;
        });;

        setButtonText("Send");

        setFormDetails(formInitialDetails);
        if (statusCode === 200) {
            setStatus({ success: true, message: "Message sent succesfully!" });
        } else {
            setStatus({ success: false, message: "Something went wrong :( Please try again later." });
        }
    }

    return (

        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col className="imgCol" md={6}>
                        <img src={contactImg} alt="Contact Us" />
                        {/* <img className="sendMailGif" src={sendMailGif}></img> */}
                    </Col>
                    <Col className="contact-text" md={6}>
                        <h2 className='getintouch'>Get in Touch</h2>
                        <h3 className='worktogether'>Let's work together!</h3>
                        <h3 className='mail-text'>
                            <a href="mailto:hernancs10@gmail.com?subject=Let's work together&body=Hello Hernán, ">hernancs10@gmail.com</a>
                        </h3>

                        {/* <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                    </Col>
                    <Col sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                    </Col>
                    <Col sm={12} className="px-1">
                        <textarea row={6} value={formDetails.message} placeholder="Write your message here..." onChange={(e) => onFormUpdate('message', e.target.value)} />
                        <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                        status.message &&
                        <Col>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                    }
                </Row>
            </form> */}
                    </Col>
                </Row >
            </Container >
        </section >
    )
}