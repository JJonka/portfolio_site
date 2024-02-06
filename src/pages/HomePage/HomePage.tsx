import { ReactSVG } from "react-svg";
import Card from "../../components/Card/Card";
import Container from "../../components/Container/Container";
import Copyright from "../../components/Copyright/Copyright";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Transitions from "../../components/Transitions/Transitions";
import styles from "./HomePage.module.scss";

const HomePage = () => (
  <Card>
    <Menu></Menu>
    <Transitions>
      <Container page="container-home">
        <div className={styles.text}>
          <Header page="header-home">Hello, world! I'm Joanna.</Header>
          <h2 data-testid="h2" className={styles.introduction}>
            A junior fullstack developer, <br />
            ready to work and gain experience.
          </h2>
        </div>
        <ReactSVG src={"/assets/logoHome.svg"} className={styles.homeLogo} />
      </Container>
      <Copyright></Copyright>
    </Transitions>
  </Card>
);

export default HomePage;
