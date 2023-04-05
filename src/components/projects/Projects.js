import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "../project_card/ProjectCard";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import './Projects.css'
// import TrackVisibility from  'react-on-screen';
import React from 'react';

export const Projects = () => {
    const projects = [
        {
            title: "",
            description: "",
            imgUrl: projImg1,
        }, {
            title: "",
            description: "",
            imgUrl: projImg2,
        },
        {
            title: "",
            description: "",
            imgUrl: projImg3,
        },
        {
            title: "",
            description: "",
            imgUrl: projImg3,
        },
        {
            title: "",
            description: "",
            imgUrl: projImg1,
        },
        {
            title: "",
            description: "",
            imgUrl: projImg2,
        }
    ]

    const projects2 = [
        {
            title: "",
            description: "",
            imgUrl: projImg1,
        }, {
            title: "",
            description: "",
            imgUrl: projImg2,
        },
        {
            title: "",
            description: "",
            imgUrl: projImg3,
        }
    ]

    return (
        //cambiar classname para que tome bien a donde editar el CSS XDXDXD
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects2.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" alt="background-img" src={colorSharp2} />
        </section>
    )
}