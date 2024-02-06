import Menu from "../../components/Menu/Menu";
import styles from "./About.module.scss";
import Box from "../../components/Box/Box";
import Card from "../../components/Card/Card";
import Transitions from "../../components/Transitions/Transitions";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import CV from "../../CVJJurasz.pdf";
import Item from "../../components/Item/Item";

const About = () => (
  <Card>
    <Menu></Menu>
    <Transitions>
      <Container page="container-about">
        <img
          data-testid="image"
          src="/assets/jj.svg"
          className={styles.image}
          alt="Jo_pic"
        ></img>
        <Header page="header-about">That's me.</Header>
        <div className={styles.text}>
          <Item page="item1-about">
            <Box data-testid="Box" header="In a few words">
              -&nbsp;reliable <br />
              -&nbsp;curious&nbsp;about&nbsp;the&nbsp;world <br />
              -&nbsp;always&nbsp;ready&nbsp;to&nbsp;learn&nbsp;something&nbsp;new
              <br />
              -&nbsp;spending&nbsp;time&nbsp;making&nbsp;web&nbsp;applications
              <br />
              -&nbsp;fond&nbsp;of&nbsp;swimming,&nbsp;jogging&nbsp;and&nbsp;hiking
            </Box>
          </Item>
          <Item page="item2-about">
            <Box data-testid="Box" header="In a few sentences">
              <br />
              &emsp;I am a junior fullstack developer. I have been working with
              frontend (React, Typescript, HTML, and CSS Modules) and backend
              (Express, Prisma, MongoDB, Docker) technologies. Currently, I am
              working on a web application for building depot, which ought to be
              a catalog of products. My role in this project not only includes
              programming, but also making decisions about which technology or
              solution to use. It gives me the opportunity to learn every step
              in application making. It is very challenging, but I find pleasure
              in designing, creating, and fixing things, so it gives me a great
              satisfaction. I am open to work where I could make good use of my
              skills, but also improve them.
              <br />
              <br />
            </Box>
          </Item>
          <Item page="item3-about">
            <Box data-testid="Box" header="In many sentences">
              <a
                href={CV}
                download="JJuraszCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Click here to download my CV
              </a>
            </Box>
          </Item>
        </div>
      </Container>
    </Transitions>
  </Card>
);

export default About;
