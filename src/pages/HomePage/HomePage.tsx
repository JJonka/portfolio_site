import { ReactSVG } from "react-svg";
import Card from "../../components/Card/Card";
import Container from "../../components/Container/Container";
import Copyright from "../../components/Copyright/Copyright";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Transitions from "../../components/Transitions/Transitions";
import Button from "../../components/Button/Button";
import styles from "./HomePage.module.scss";

const HomePage = () => (
  <div className={styles.position}>
    <Card>
      <Menu></Menu>
      <Transitions>
        <Container page="container-home">
          <div className={styles.text}>
            <Header page="header-home">Hi! I am Joanna,</Header>
            <h2 data-testid="h2" className={styles.introduction}>
              a junior fullstack developer. <br />
            </h2>
            <div className={styles.buttonsContainer}>
              <Button link="/about">About</Button>
              <Button link="/contact">Contact me</Button>
            </div>
          </div>
          <ReactSVG src={"/assets/mimosa.svg"} className={styles.homeLogo} />
        </Container>
      </Transitions>
      <Copyright></Copyright>
    </Card>
  </div>
);

export default HomePage;
