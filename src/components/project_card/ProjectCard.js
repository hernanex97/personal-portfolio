import React from 'react';
import { Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faLink} />


export const ProjectCard = ({ title, year, description, imgUrl, url, classButton, buttonSTR }) => {
    var html_button = null;
    if (buttonSTR != "Play") {
        // html_button = <Button className={classButton} href={url} target='_blank'>{element} {url}</Button>
        html_button = <a className={classButton} href={url} target='_blank'>{element} {url}</a>
    }
    else {
        // html_button = <Button className={classButton} href={url} target='_blank'>{buttonSTR}</Button>
        html_button = <a className={classButton} href={url} target='_blank'>{element} {url}</a>
    }


    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="url-img" />
                <div className="proj-txt">
                    <span class="date-bs">{year}</span>
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
            <div className="div-link">
                {html_button}
            </div>
        </Col>
    )
}