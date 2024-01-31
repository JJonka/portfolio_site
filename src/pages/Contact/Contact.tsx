import Menu from "../../components/Menu/Menu";
import styles from "./Contact.module.scss";
import LogoIcon from "../../components/LogoIcon/LogoIcon";
import Card from "../../components/Card/Card";
import Transitions from "../../components/Transitions/Transitions";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";

const Contact = () => {
  return (
    <Card>
      <Menu></Menu>
      <Transitions>
        <Container page="container-contact">
          <Header page="header-contact">Let's stay in touch!</Header>
          <div data-testid="logos" className={styles.logos}>
            <a
              href="https://www.linkedin.com/in/joanna-jurasz/"
              target="_blank"
            >
              <LogoIcon
                logo={"/assets/linkedin_logo.svg"}
                logoText={"in/joanna-jurasz/"}
              ></LogoIcon>
            </a>
            <a href="mailto:joanna.jurasz21@gmail.com">
              <LogoIcon
                logo={"/assets/mail_logo.svg"}
                logoText={"joanna.jurasz21@gmail.com"}
              ></LogoIcon>
            </a>
            <a href="https://github.com/JJonka" target="_blank">
              <LogoIcon
                logo={"/assets/github_logo.svg"}
                logoText={"github.com/JJonka"}
              ></LogoIcon>
            </a>
          </div>
        </Container>
      </Transitions>
    </Card>
  );
};

export default Contact;
