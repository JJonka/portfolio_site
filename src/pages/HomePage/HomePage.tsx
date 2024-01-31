import Card from "../../components/Card/Card";
import Container from "../../components/Container/Container";
import Copyright from "../../components/Copyright/Copyright";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Transitions from "../../components/Transitions/Transitions";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <Card>
      <Menu></Menu>
      <Container page="container-home">
        <Transitions>
          <img
            data-testid="imageTop"
            src="/assets/stars2.svg"
            className={styles.imgTop}
          ></img>
          <Header page="header-home">Hello, world! I'm Joanna.</Header>
          <h2 data-testid="h2" className={styles.introduction}>
            A junior fullstack developer, <br />
            ready to work and gain experience.
          </h2>
          <img
            data-testid="imageBottom"
            src="/assets/stars.svg"
            className={styles.imgBottom}
          ></img>
        </Transitions>
      </Container>
      <Transitions>
        <Copyright></Copyright>
      </Transitions>
    </Card>
  );
};

export default HomePage;
