import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import './Skills.css';

//#region Imports_icons
import csharp_ico from "programming-languages-logos/src/csharp/csharp_512x512.png"
import python_ico from "programming-languages-logos/src/python/python_512x512.png"
import javascript_ico from "programming-languages-logos/src/javascript/javascript_512x512.png"
import css_ico from "../../assets/img/css_logo.png"
import html_ico from "../../assets/img/html_white_512x512.png"
import flutter_ico from "../../assets/img/flutter_2.png"
import docker_ico from "../../assets/img/docker.png"
import k8s_ico from "../../assets/img/k8s.png"
import unity_ico from "../../assets/img/unity_logo_512x512.png"
import firebase_logo from "../../assets/img/firebase_logo2.png"
import sql_logo from "../../assets/img/sql_logo.png"
import colorSharp from "../../assets/img/new-color-sharp.png";

//#endregion Imports_icons


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

  const logos = [csharp_ico, python_ico, javascript_ico, css_ico, html_ico,
    flutter_ico, docker_ico, k8s_ico, unity_ico, firebase_logo, sql_logo]

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Throughout my career I worked on different projects with various technologies and frameworks, developing Web Apps, Mobile Apps, Desktop App and Games. These are some of my skills.</p>
              <div className='carousel-bx'>
                <Carousel autoPlay={true} autoPlaySpeed={2000} responsive={responsive} infinite={true} className="skill-slider" >
                  {
                    logos.map((logo, index) => {
                      return <ImagesLogos logoName={logo} key={index} />
                    })
                  }

                </Carousel>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" alt="bckgrimg" src={colorSharp} />
    </section>
  )
}


export const ImagesLogos = ({ logoName, className }) => {

  if (logoName.includes('firebase')) {
    className = 'firebase_logo';
  }
  else if (logoName.includes('unity')) {
    className = 'unity_logo';
  }
  else if (logoName.includes('sql')) {
    className = 'sql_logo';
  }
  else {
    className = 'item';
  }

  return (
    <div className={className}>
      <img src={logoName} alt={logoName} />
    </div>
  );
}