import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import csharp_ico from "programming-languages-logos/src/csharp/csharp_512x512.png"
import html_ico from "programming-languages-logos/src/html/html_white_512x512.png"
import python_ico from "programming-languages-logos/src/python/python_512x512.png"
import javascript_ico from "programming-languages-logos/src/javascript/javascript_512x512.png"
import flutter_ico from "programming-languages-logos/src/flutter_2.png"
import docker_ico from "programming-languages-logos/src/docker.png"
import k8s_ico from "programming-languages-logos/src/k8s.png"

import colorSharp from "../../assets/img/color-sharp.png";
import React from 'react';
import './Skills.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider" >
                <div className="item">
                  <img src={csharp_ico} alt="C#" />
                  {/* <h5>C#</h5> */}
                </div>
                <div className="item">
                  <img src={python_ico} alt="python" />
                  {/* <h5>Full Stack</h5> */}
                </div>
                <div className="item">
                  <img src={html_ico} alt="html" />
                  {/* <h5>App Development</h5> */}
                </div>
                <div className="item">
                  <img src={javascript_ico} alt="javascript" />
                  {/* <h5>Game Development</h5> */}
                </div>
                <div className="item">
                  <img src={flutter_ico} alt="game" />
                  {/* <h5>Game Development</h5> */}
                </div>
                <div className="item">
                  <img src={docker_ico} alt="game" />
                  {/* <h5>Game Development</h5> */}
                </div>
                <div className="item">
                  <img src={k8s_ico} alt="game" />
                  {/* <h5>Game Development</h5> */}
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" alt="bckgrimg" src={colorSharp} />
    </section>
  )

}
