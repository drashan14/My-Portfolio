import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import Promethean from "../../Assets/Projects/promethean.jpg";
import HirKani from "../../Assets/Projects/Hirkani.jpg";
import charity from "../../Assets/Projects/charity.jpg";
import NotesNation from "../../Assets/Projects/notsnation.jpg";
import Samarthya from "../../Assets/Projects/samarthya.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={charity}
              isBlog={false}
              title="Charity"
              description="This is a funding website using that we can collect the fund for charity from different agency through online platform."
              ghLink="https://github.com/drashan14/Orphanege-Project"
              demoLink="funding-for-charity.000webhostapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HirKani}
              isBlog={false}
              title="Hirkani Matching Center"
              description="This is database management project in wich we are creating a one real time E-commerce website wich is sponsered by Hirkani Matching Centre ."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://hirkanimatchingcentre.onlineweb.shop/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Promethean}
              isBlog={false}
              title="Promethean"
              description="Promethean Club Website."
              ghLink="https://github.com/drashan14/Promethean.github.io"
              demoLink="https://drashan14.github.io/Promethean.github.io/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NotesNation}
              isBlog={false}
              title="NotesNation"
              description="The NotesNation puts number of books, notes at your fingertips. - NotesNation Unlimited members can enjoy unlimited reading ."
              ghLink="https://github.com/drashan14/NotesNation.github.io"
              demoLink="https://drashan14.github.io/NotesNation.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Samarthya}
              isBlog={false}
              title="Ai For Social Good"
              description="Samarthya is a development organization, working with marginalized communities on access to quality primary education, strengthening and promoting community based organizations, youth leadership and development, women and girls empowerment and disaster risk reduction.."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://www.mahasamarthya.org/y" 
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
