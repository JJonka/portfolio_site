import Menu from "../components/Menu";
import styles from "./Work.module.scss";
import Box from "../components/Box";
import TechIcon from "../components/TechIcon";
import Card from "../components/Card";
import EndOfSection from "../components/EndOfSection";
import Transitions from "../components/Transitions";
import Copyright from "../components/Copyright";



const Work = () => {
    return (
        <div>
            <Menu></Menu>
            <Card>
                <Transitions>
                    <div className={styles.container}>
                        <h1 className={styles.header}>Technologies I work with</h1>
                        <div className={styles.logos}>
                            <div className={styles.line}>
                                <TechIcon icon="/assets/techLogos/html.svg" tooltipText="HTML" />
                                <TechIcon icon="/assets/techLogos/css.svg" tooltipText="CSS" />
                                <TechIcon icon="/assets/techLogos/js.svg" tooltipText="JavaScript" />
                                <TechIcon icon="/assets/techLogos/ts.svg" tooltipText="TypeScript" />
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
                                <TechIcon icon="/assets/techLogos/windows.svg" tooltipText="Windows" />
                                <TechIcon icon="/assets/techLogos/vsc.svg" tooltipText="Visual Studio Code" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <h1 className={styles.header}>Projects</h1>
                        <div className={styles.project}> 
                            <div className={styles.item1}>
                                <Box header={"Buisness Homepage"} >
                                    &emsp;The project involved working in a group of two juniors and one senior
                                    to create business homepage for a geodesic company. My responsibilities
                                    included creating responsive views based on prepaired earlier mock-ups
                                    and performing a code review.
                                    <img src="/assets/dkart-logo.png" alt="dkart_logo" className={styles.image}></img>
                                </Box>
                            </div>
                            <div className={styles.item2}>
                                <Box header={"Technologies"}>
                                    HTML,  CSS,  VanillaJS,  JavaScript,  Jira,  Git
                                </Box>
                            </div>
                            <div className={styles.item3}>
                                <Box header="Links">
                                    <a href="http://geodesy-web-page.vercel.app" target="_blank" className={styles.link}>Page</a>
                                    <a href="https://github.com/FutureInventor/GeodesyWebPage" target="_blank" className={styles.link}>Repository</a>
                                </Box>
                            </div>
                        </div>
                        <EndOfSection></EndOfSection>
                        <div className={styles.project}> 
                            <div className={styles.item1}>
                                <Box header={"Application for estate agents"} >
                                    &emsp;I am currently in a group of seniors and a few juniors working on a project 
                                    to develop a web application for estate agents. Its features include a&nbsp;list of 
                                    clients who can be matched with estates in&nbsp;the database based on their preferences, 
                                    as well as a meeting manager. My responsibilities during creating the application involved 
                                    the&nbsp;implementation of a form for adding new meetings. This project allows me to learn 
                                    and practice group working using technologies like Github and Jira.
                                </Box>
                            </div>
                            <div className={styles.item2}>
                                <Box header={"Technologies"}>
                                    React, Typescript, Nextjs, Styled&nbsp;components, Graphql, Nest, Prisma
                                </Box >
                            </div>
                        </div>
                    </div>
                </Transitions>
            </Card>
            <Transitions>
                <Copyright></Copyright> 
            </Transitions>
        </div> 
    )
};

export default Work;