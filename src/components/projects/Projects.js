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
import watchviewer from "../../assets/projects-images/watchviewer.png"
import uif from "../../assets/projects-images/uif.png"
import ibm from "../../assets/projects-images/ibm.png"
import './Projects.css';

export const Projects = () => {
    const gameprojects = [
        {
            title: "Fast Cars",
            year: "2019",
            description: "Mobile Game where you are a 🚗 thief and the police starts to chase you. ¿How long can you scape from the police? Made With Unity.",
            imgUrl: fastcars,
            url: "https://pressstartteam.itch.io/brakeless",
            classButton: "linkButton",
        }, {
            title: "League of Goals",
            year: "2020",
            description: "Desktop Local Fútbol ⚽ Game. 2vs2 game with Lego inspiration idea. Made With Unity.",
            imgUrl: leagofgols,
            classButton: "linkButton",
            url: "Not Available"
        },
        {
            title: "Office Hero",
            year: "2020",
            description: "You're a Junior Developer starting a new job. Try to survive the office 💀 Made With Unity.",
            imgUrl: officehero,
            url: "https://jangames.itch.io/office-hero",
            classButton: "linkButton",
        },
        {
            title: "WatchViewer",
            year: "2020",
            description: "A Viewer of 3D Models. Made with Unity",
            imgUrl: watchviewer,
            url: "https://simmer.io/@hernoanddog/watchviewer",
            classButton: "linkButton",
        },
        {
            title: "Forest Hope",
            year: "2021",
            description: "Humans are irresponsible 😡 Save the forest from the fire! Made With Unity.",
            imgUrl: foresthope,
            url: "https://pressstartteam.itch.io/forest-hope",
            classButton: "linkButton",
        },
        {
            title: "Electron Attraction",
            year: "2021",
            description: "Find your Electron 💘⚡ 2 Players Game. Made With Unity.",
            imgUrl: electrons,
            url: "https://pressstartteam.itch.io/electron",
            classButton: "linkButton",
        },
    ]

    const workProjects = [
        {
            title: "Oversoft",
            year: "Jan 2020 - Sep 2020",
            description: "Backend Developer Role. Technologies used: C#.NET, VB.NET, SQL SERVER",
            imgUrl: oversoft,
            classButton: "linkButton",
            url: "https://oversoft.net/",
        }, {
            title: "Argentine Financial Information Unit (UIF)",
            year: "Sep 2020 - Jun 2021",
            description: "Full Stack .NET Developer. Technologies used: C#.NET, .NET CORE, ASP.NET, SQL SERVER, Entity Framework, Git, Microsoft TFS.",
            imgUrl: uif,
            classButton: "linkButton",
            url: "https://www.argentina.gob.ar/uif",
        },
        {
            title: "IBM",
            year: "Jun 2021 - Present",
            description: "Developer and Consultant. Working in projects with multiple clients like Banks & TelCo. Technologies: Openshift, K8s, Docker, API Connect, Watson Assistant, Python, JavaScript.",
            imgUrl: ibm,
            classButton: "linkButton",
            url: "https://www.ibm.com",
        }
    ]

    return (
        //cambiar classname para que tome bien a donde editar el CSS XDXDXD
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Experience</h2>
                        <p>
                            I'm currently working as a <b>Developer and Consultant of Integration on Expert Lab's team at IBM</b>.<br />
                            Also, i had the opportunity to work with a team of developers, who are also friends of mine.
                            Together, we funded Press Start Games. Down here are a few games we've done and some of them were showcased at events in Buenos Aires, Argentina.
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Professional Experience</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Video Games Proyects</Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <Nav.Link eventKey="third">Games</Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                            {/* <p>¡mouseover the cards!</p> */}
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
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
                                <Tab.Pane eventKey="second">
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