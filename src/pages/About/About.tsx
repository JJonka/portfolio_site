import Menu from "../../components/Menu/Menu";
import styles from "./About.module.scss";
import Box from "../../components/Box/Box";
import Card from "../../components/Card/Card";
import Transitions from "../../components/Transitions/Transitions";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";

const About = () => {
  return (
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
          <div className={styles.text}>
            <Header page="header-about">That's me.</Header>
            <Box data-testid="Box">
              &emsp;If I had to describe myself in a few words, I&nbsp;would say
              that I am reliable, curious about the&nbsp;world and always ready
              to learn something new. I&nbsp;find pleasure in designing and
              creating things. Nowadays, I&nbsp;spend time making web
              applications and improving my programming skills. Besides that, in
              my spare time I like to go swimming, jogging or hiking with my
              friends.
            </Box>
          </div>
        </Container>
      </Transitions>
    </Card>
  );
};

export default About;
