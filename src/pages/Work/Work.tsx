import Menu from "../../components/Menu/Menu";
import styles from "./Work.module.scss";
import Box from "../../components/Box/Box";
import TechIcon from "../../components/TechIcon/TechIcon";
import Card from "../../components/Card/Card";
import Transitions from "../../components/Transitions/Transitions";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Project from "../../components/Project/Project";
import WorkDate from "../../components/WorkDate/WorkDate";
import Item from "../../components/Item/Item";

const Work = () => (
  <Card>
    <Menu></Menu>
    <Transitions>
      <Container page="container-work">
        <Header page="header-work">Work history</Header>
        <Project>
          <Item page="item1">
            <Box header={"KAR HUD Software Development"}>
              <WorkDate>{"2023.11 - present"}</WorkDate>
              <br />
              My responsibilites include: <br />
              - creating scalable and responsive web application, <br />-
              writing unit tests, using React Testing Library and Jest <br />-
              debugging code with browser/text editor debugger <br />
              - doing code review, <br />
              - consulting creation of components with&nbsp;client,
              <br />- creating generic components library using Storybook
              <br />- using version control system - git, <br />- work planning
              and time management using Jira, <br />
              - making operations on databases (MongoDB), <br />- creating and
              managing application's server (Express.js). <br /> <br />
            </Box>
          </Item>
          <Item page="item2">
            <Box>
              Currently, I am mainly focused on creating a web application for a
              building depot. The project requires creating a database with the
              current product list, which will be updated every time something
              is added or removed from the origin file. For this job, I have
              chosen technologies like MongoDB, Express.js, React and Vite
            </Box>
          </Item>
        </Project>
        <Header page="header-work">Internships</Header>
        <Project>
          <Item page="item1">
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
            </Box>
          </Item>
          <Item page="item2">
            <Box header={"Technologies"}>
              React, Typescript, Nextjs, Styled&nbsp;components, Graphql, Nest,
              Prisma
            </Box>
          </Item>
        </Project>
        <Project>
          <Item page="item1">
            <Box header={"Buisness Homepage"}>
              <WorkDate>{"2022.06"}</WorkDate>
              <br />
              &emsp;The project involved working in a group of two juniors and
              one senior to create business homepage for a geodesic company. My
              responsibilities included creating responsive views based on
              prepaired earlier mock-ups and performing a code review.
              <img
                className={styles.img}
                src="/assets/dkart-logo.png"
                alt="dkart_logo"
              ></img>
            </Box>
          </Item>
          <Item page="item2">
            <Box header={"Technologies"}>
              HTML, CSS, VanillaJS, JavaScript, Jira, Git
            </Box>
          </Item>
          <Item page="item3">
            <Box header="Links">
              <a
                href="http://geodesy-web-page.vercel.app"
                target="_blank"
                className={styles.link}
              >
                Page
              </a>
              <a
                href="https://github.com/FutureInventor/GeodesyWebPage"
                target="_blank"
                className={styles.link}
              >
                Repository
              </a>
            </Box>
          </Item>
        </Project>
      </Container>
      <Container page="container-work">
        <Header page="header-work">Projects</Header>
        <Project>
          <Item page="item1">
            <Box header={"My portfolio site"}>
              <WorkDate>{"2023.09 - 2023.10"}</WorkDate>
              <br />
              During work on my portfolio website I have used technologies:
              React, Typescript, HTML, CSS Modules, Vite. <br />
              <br />
              Click and checkout its repository:
              <br />
              <br />
              <a
                href="https://github.com/JJonka/portfolio_site"
                target="_blank"
                className={styles.link}
              >
                Repository
              </a>
            </Box>
          </Item>
        </Project>
        <Project>
          <Item page="item1">
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
              My work included: <br />- designing the optical system and all of
              the device case using Tinkercad,
              <br /> - assembling the electronic system consisting of: light
              source, light sensor, LCD display and Arduino Mega 2560
              microcontroller board,
              <br />- developing software, which allowed making hemoglobin
              measurements.
            </Box>
          </Item>
          <Item page="item2">
            <Box header={"Designs and prints"}>
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
            </Box>
          </Item>
        </Project>
      </Container>
      <Container page="container-work">
        <Header page="header-work">Technologies I work with</Header>
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
            <TechIcon icon="/assets/techLogos/react.svg" tooltipText="React" />
          </div>
          <div className={styles.line}>
            <TechIcon icon="/assets/techLogos/git.svg" tooltipText="Git" />
            <TechIcon icon="/assets/techLogos/sass.svg" tooltipText="SASS" />
            <TechIcon icon="/assets/techLogos/npm.svg" tooltipText="NPM" />
            <TechIcon icon="/assets/techLogos/yarn.svg" tooltipText="YARN" />
          </div>
          <div className={styles.line}>
            <TechIcon icon="/assets/techLogos/linux.svg" tooltipText="Linux" />
            <TechIcon
              icon="/assets/techLogos/windows.svg"
              tooltipText="Windows"
            />
            <TechIcon
              icon="/assets/techLogos/vsc.svg"
              tooltipText="Visual Studio Code"
            />
          </div>
        </div>
      </Container>
    </Transitions>
  </Card>
);

export default Work;
