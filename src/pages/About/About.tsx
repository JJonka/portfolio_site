import Menu from "../../components/Menu/Menu";
import styles from "./About.module.scss";
import Box from "../../components/Box/Box";
import Card from "../../components/Card/Card";
import Transitions from "../../components/Transitions/Transitions";
import Container from "../../components/Container/Container";
import CV from "../../CVJJurasz.pdf";
import Item from "../../components/Item/Item";
import Copyright from "../../components/Copyright/Copyright";
import TechIcon from "../../components/TechIcon/TechIcon";
import Header from "../../components/Header/Header";

const About = () => (
  <>
    <Card>
      <Menu></Menu>
      <Transitions>
        <Container page="container-about">
          <Item page="item1-about">
            <Box data-testid="Box">
              &emsp;I am a junior fullstack developer. I have been working with
              frontend (React, Typescript, HTML, and CSS Modules) and backend
              (Express, Prisma, MongoDB, Docker) technologies. Currently, I am
              working on a web application for building depot, which ought to be
              a catalog of products. My role in this project not only includes
              programming, but also making decisions about which technology or
              solution to use. It gives me the opportunity to learn every step
              in application making. It is very challenging, but I find pleasure
              in designing, creating, and fixing things, so it gives me a great
              satisfaction.
            </Box>
          </Item>
          <div className={styles.secondColumn}>
            <img
              data-testid="image"
              src="/assets/jurasz.svg"
              className={styles.image}
              alt="Jo_pic"
            ></img>
            <a
              href={CV}
              download="JJuraszCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Download my CV
            </a>
          </div>
        </Container>
        <Container page="container-work">
          <Header page="header-about">Technologies I work with</Header>
          <div className={styles.logos}>
            <div className={styles.line}>
              <TechIcon icon="/assets/techLogos/html.svg" tooltipText="HTML" />
              <TechIcon icon="/assets/techLogos/css.svg" tooltipText="CSS" />
              <TechIcon
                icon="/assets/techLogos/js.svg"
                tooltipText="JavaScript"
              />
              <TechIcon
                icon="/assets/techLogos/ts.svg"
                tooltipText="TypeScript"
              />
              <TechIcon
                icon="/assets/techLogos/react.svg"
                tooltipText="React"
              />
              <TechIcon
                icon="/assets/techLogos/storybook.svg"
                tooltipText="Storybook"
              />
            </div>
            <div className={styles.line}>
              <TechIcon icon="/assets/techLogos/git.svg" tooltipText="Git" />
              <TechIcon icon="/assets/techLogos/sass.svg" tooltipText="SASS" />
              <TechIcon icon="/assets/techLogos/npm.svg" tooltipText="NPM" />
              <TechIcon icon="/assets/techLogos/yarn.svg" tooltipText="YARN" />
              <TechIcon
                icon="/assets/techLogos/node.svg"
                tooltipText="Node.js"
              />
              <TechIcon
                icon="/assets/techLogos/windows.svg"
                tooltipText="Windows"
              />
            </div>
            <div className={styles.line}>
              <TechIcon
                icon="/assets/techLogos/linux.svg"
                tooltipText="Linux"
              />
              <TechIcon
                icon="/assets/techLogos/windows.svg"
                tooltipText="Windows"
              />
              <TechIcon
                icon="/assets/techLogos/vsc.svg"
                tooltipText="Visual Studio Code"
              />
              <TechIcon
                icon="/assets/techLogos/mongodb.svg"
                tooltipText="MongoDB"
              />
              <TechIcon
                icon="/assets/techLogos/docker.svg"
                tooltipText="Docker"
              />
              <TechIcon
                icon="/assets/techLogos/prisma.svg"
                tooltipText="Prisma"
              />
            </div>
          </div>
        </Container>
      </Transitions>
    </Card>
    <Copyright page="copyright-work"></Copyright>
  </>
);

export default About;
