import React from 'react';
import { Button, Col } from "react-bootstrap";

export const ProjectCard = ({title, description, imgUrl, url, classButton, buttonSTR}) => {
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="url-img"/>
                <div className="proj-txt">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
            <div style={{marginBottom:"20px"}}>
                <Button className={classButton} href={url} target='_blank'>{buttonSTR}</Button>
            </div>
        </Col>
    )
}