import React from 'react';
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "../project_card/ProjectCard";
import colorSharp2 from "../../assets/img/new-color-sharp2.png";
import fastcars from "../../assets/projects-images/fastcars.png"
import officehero from "../../assets/projects-images/officehero.png"
import leagofgols from "../../assets/projects-images/leagofgoals.png"
import foresthope from "../../assets/projects-images/foresthope.png"
import electrons from "../../assets/projects-images/electrons.png"
import oversoft from "../../assets/projects-images/OVERSOFT.png"
import uif from "../../assets/projects-images/uif.png"
import ibm from "../../assets/projects-images/ibm.png"
import './Projects.css';

export const Projects = () => {
    const gameprojects = [
        {
            title: "Fast Cars",
            description: "Mobile Game where you are a 🚗 thief and the police starts to chase you. ¿How long can you scape from the police? Made With Unity.",
            imgUrl: fastcars,
            url: "https://pressstartteam.itch.io/brakeless",
            classButton: "playbutton",
            buttonSTR: "Play"
        }, {
            title: "League of Goals",
            description: "Desktop Local Fútbol ⚽ Game. 2vs2 game with Lego inspiration idea. Made With Unity.",
            imgUrl: leagofgols,
            classButton: "playbutton_not",
            buttonSTR: "Not Available"
        },
        {
            title: "Office Hero",
            description: "You're a Junior Developer starting a new job. Try to survive the office 💀 Made With Unity.",
            imgUrl: officehero,
            url: "https://jangames.itch.io/office-hero",
            classButton: "playbutton",
            buttonSTR: "Play"
        },
        {
            title: "Forest Hope",
            description: "Humans are irresponsible 😡 Save the forest from the fire! Made With Unity.",
            imgUrl: foresthope,
            url: "https://pressstartteam.itch.io/forest-hope",
            classButton: "playbutton",
            buttonSTR: "Play"
        },
        {
            title: "Electron Attraction",
            description: "Find your Electron 💘⚡ 2 Players Game. Made With Unity.",
            imgUrl: electrons,
            url: "https://pressstartteam.itch.io/electron",
            classButton: "playbutton",
            buttonSTR: "Play"
        },
    ]

    const workProjects = [
        {
            title: "Oversoft",
            description: "Backend Developer Role. Technologies used: C#.NET, VB.NET, SQL SERVER",
            imgUrl: oversoft,
            classButton: "playbutton",
            url: "https://oversoft.net/",
            buttonSTR: "Website"
        }, {
            title: "Argentine Financial Information Unit (UIF)",
            description: "Full Stack .NET Developer. Technologies used: C#.NET, .NET CORE, ASP.NET, SQL SERVER, Entity Framework, Git, Microsoft TFS.",
            imgUrl: uif,
            classButton: "playbutton",
            url: "https://www.argentina.gob.ar/uif",
            buttonSTR: "Website"
        },
        {
            title: "IBM",
            description: "Developer and Consultant. Working in projects with multiple clients like Banks & TelCo. Technologies: Openshift, K8s, Docker, API Connect, Watson Assistant, Python, JavaScript.",
            imgUrl: ibm,
            classButton: "playbutton",
            url: "https://www.ibm.com",
            buttonSTR: "Website"
        }
    ]

    return (
        //cambiar classname para que tome bien a donde editar el CSS XDXDXD
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            I had the opportunity to work with a team of developers, who are also friends of mine. Together, we funded Press Start Games, and we developed some of the following games - which were showcased at events in Buenos Aires, Argentina. I'm also currently working as a Developer and Consultant of Integration at IBM, on Expert Lab's team.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Games</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Work</Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <Nav.Link eventKey="third">Games</Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            gameprojects.map((project, index) => {
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
                                            workProjects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                {/* <Tab.Pane eventKey="third">
                                    <Row>
                                    </Row>
                                </Tab.Pane> */}
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" alt="background-img" src={colorSharp2} />
        </section>
    )
}