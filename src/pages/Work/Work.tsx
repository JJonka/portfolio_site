import Menu from "../../components/Menu/Menu";
import styles from "./Work.module.scss";
import Box from "../../components/Box/Box";
import Card from "../../components/Card/Card";
import Transitions from "../../components/Transitions/Transitions";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Project from "../../components/Project/Project";
import WorkDate from "../../components/WorkDate/WorkDate";
import Item from "../../components/Item/Item";
import Copyright from "../../components/Copyright/Copyright";

const Work = () => (
  <Card>
    <Menu></Menu>
    <Transitions>
      <Container page="container-work">
        <Header page="header-work">Work history</Header>
        <Project>
          <Item page="item1-work">
            <Box header={"KAR HUD Software Development"}>
              <WorkDate>{"2023.11 - present"}</WorkDate>
              <br />
              My responsibilites include:
              <ul>
                <li>creating scalable and responsive web application,</li>
                <li>
                  writing unit tests, using React Testing Library and Jest,
                </li>
                <li>debugging code with browser/text editor debugger,</li>
                <li>doing code review,</li>
                <li>consulting creation of components with&nbsp;client,</li>
                <li>creating generic components library using Storybook,</li>
                <li>using version control system - git,</li>
                <li>work planning and time management using Jira,</li>
                <li>making operations on databases (MongoDB),</li>
                <li>
                  creating and managing application's server (Express.js).
                </li>
              </ul>
              Currently, I am mainly focused on creating a web application for a
              building depot. The project requires creating a database with the
              current product list, which will be updated every time something
              is added or removed from the origin file. For this job, I have
              chosen technologies like MongoDB, Express.js, React and Vite
              <br />
            </Box>
          </Item>
        </Project>
        <Header page="header-work">Internships</Header>
        <Project>
          <Item page="item2-work">
            <Box header={"Application for estate agents"}>
              <WorkDate>{"2023.04 - 2023.11"}</WorkDate>
              <br />
              &emsp;I was in a group of seniors and a few juniors working on a
              project to develop a web application for estate agents. Its
              features included a&nbsp;list of clients who can be matched with
              estates in&nbsp;the database based on their preferences, as well
              as a meeting manager. My responsibilities during creating the
              application involved the&nbsp;implementation of a form for adding
              new meetings. This project allowed me to learn and practice group
              working using technologies like Github and Jira.
              <br />
              <br /> Technologies:
              <ul>
                <li>React</li>
                <li>Typescript</li>
                <li>Styled Components</li>
                <li>Prisma</li>
              </ul>
            </Box>
          </Item>
        </Project>
        <Project>
          <Item page="item1-work">
            <Box header={"Buisness Homepage"}>
              <WorkDate>{"2022.06"}</WorkDate>
              <br />
              &emsp;The project involved working in a group of two juniors and
              one senior to create business homepage for a geodesic company. My
              responsibilities included creating responsive views based on
              prepaired earlier mock-ups and performing a code review.
              <br />
              <br /> Technologies:
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>VanillaJS</li>
                <li>Jira</li>
                <li>Git</li>
              </ul>
              <br />
              <a
                href="http://geodesy-web-page.vercel.app"
                target="_blank"
                className={styles.link}
              >
                http://geodesy-web-page.vercel.app
              </a>
              <a
                href="https://github.com/FutureInventor/GeodesyWebPage"
                target="_blank"
                className={styles.link}
              >
                https://github.com/FutureInventor/GeodesyWebPage
              </a>
            </Box>
          </Item>
        </Project>
      </Container>
      <Container page="container-work">
        <Header page="header-work">Projects</Header>
        <Project>
          <Item page="item2-work">
            <Box header={"My portfolio site"}>
              <WorkDate>{"2023.09 - 2023.10"}</WorkDate>
              <br />
              During work on my portfolio website I have used technologies:
              React, Typescript, HTML, CSS Modules, Vite. <br />
              <br />
              <a
                href="https://github.com/JJonka/portfolio_site"
                target="_blank"
                className={styles.link}
              >
                https://github.com/JJonka/portfolio_site
              </a>
            </Box>
          </Item>
        </Project>
        <Project>
          <Item page="item1-work">
            <Box
              header={
                "Creating a hemoglobin measuring device using Arduino and 3D printing technology"
              }
            >
              <WorkDate>{"2020.10 - 2021.06"}</WorkDate>
              <br />
              &emsp;This project was a part of my master's thesis. I was
              creating small and mobile POCT (Point of Care Testing) device,
              allowing for hemoglobin concentration measurement in capillary
              blood. <br /> <br />
              My work included: <br />
              <ul>
                <li>
                  designing the optical system and all of the device case using
                  Tinkercad,
                </li>
                <li>
                  assembling the electronic system consisting of: light source,
                  light sensor, LCD display and Arduino Mega 2560
                  microcontroller board,
                </li>
                <li>
                  developing software, which allowed making hemoglobin
                  measurements.
                </li>
              </ul>
              <br />
              Design and prints
              <br />
              <br />
              <div className={styles.images}>
                <img
                  className={styles.image}
                  src="/assets/mechanic_parts.png"
                  alt="mechanic_parts"
                ></img>
                <br />
                <img
                  className={styles.image}
                  src="/assets/prints.png"
                  alt="mechanic_parts"
                ></img>
              </div>
            </Box>
          </Item>
        </Project>
      </Container>
      <Copyright></Copyright>
    </Transitions>
  </Card>
);

export default Work;
