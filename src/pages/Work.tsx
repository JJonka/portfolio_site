import Menu from "../components/Menu";
import styles from "./Work.module.scss";
import Box from "../components/Box";
import TechIcon from "../components/TechIcon";



const Work = () => {
    return (
        <div className={styles.card}>
            <Menu></Menu>
            <div className={styles.container}>
                <h1 className={styles.header}>Technologies I work with</h1>
                <div className={styles.logos}>
                    <div className={styles.line}>
                        <TechIcon icon="src\assets\techLogos\html.svg" tooltipText="HTML" />
                        <TechIcon icon="src\assets\techLogos\css.svg" tooltipText="CSS" />
                        <TechIcon icon="src\assets\techLogos\js.svg" tooltipText="JavaScript" />
                        <TechIcon icon="src\assets\techLogos\ts.svg" tooltipText="TypeScript" />
                        <TechIcon icon="src\assets\techLogos\react.svg" tooltipText="React" />
                    </div>
                    <div className={styles.line}>    
                        <TechIcon icon="src\assets\techLogos\git.svg" tooltipText="Git" />
                        <TechIcon icon="src\assets\techLogos\sass.svg" tooltipText="SASS" />
                        <TechIcon icon="src\assets\techLogos\npm.svg" tooltipText="NPM" />
                        <TechIcon icon="src\assets\techLogos\yarn.svg" tooltipText="YARN" />
                    </div>
                    <div className={styles.line}>                    
                        <TechIcon icon="src\assets\techLogos\linux.svg" tooltipText="Linux" />
                        <TechIcon icon="src\assets\techLogos\windows.svg" tooltipText="Windows" />
                        <TechIcon icon="src\assets\techLogos\vsc.svg" tooltipText="Visual Studio Code" />
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <h1 className={styles.header}>Projects</h1>
                <div className={styles.project}> 
                    <div className={styles.item1}>
                        <Box header={"Application for estate agents"} >
                            &emsp;The project involves working with a team of two seniors and few juniors to
                            create real estate agents manager. The application includes features like
                            list of clients, that can be match with estates in database based on
                            preferences they have. It also allows to create and manage list of meeting.
                            My responsibilities during creating the application involves implementation
                            of a form for adding new meetings. This project allows me to learn and
                            practice working with group of people using technologies like Github and
                            Jira.
                        </Box>
                    </div>
                    <div className={styles.item2}>
                        <Box header={"Technologies used:"}>
                            React
                            Typescript
                            Nextjs
                            Styled components
                            Graphql
                            Nest
                            Prisma
                        </Box >
                    </div>
                </div>
                <div className={styles.project}> 
                    <div className={styles.item2}>
                        <Box header={"Technologies used:"}>
                            HTML  CSS  VanillaJS  JavaScript  Jira  Git
                        </Box>
                    </div>
                    <div className={styles.item1}>
                        <Box header={"Buisness Homepage"} >
                            &emsp;The project involved working in a group of two juniors and one senior
                            to create business homepage for a geodesic company. My responsibilities
                            included creating responsive views based on prepaired earlier mock-ups
                            and performing a code review.
                        </Box>
                    </div>
                    <div className={styles.item3}>
                        <Box>
                            <img src="/src/assets/dkart_logo.png" alt="dkart_logo" ></img>
                        </Box>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
};

export default Work;