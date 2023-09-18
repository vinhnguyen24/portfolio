import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg2 from "../assets/img/eskimo.PNG";
import projImg1 from "../assets/img/hpo.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  const projects = [
    {
      title: "E-learning system",
      description: "Full-stack Development",
      imgUrl: projImg1,
    },
    {
      title: "Ecommerce Website",
      description: "Front-end Development",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div data-aos="fade-up">
              <h2>Projects</h2>
              <p>
                I'm now working as a ReactJS Developer for a Singapore customer
                on an eCommerce project.
                <br />I worked on the following projects:
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                <Tab.Content
                  id="slideInUp"
                  // className={
                  //   isVisible ? "animate__animated animate__slideInUp" : ""
                  // }
                >
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
