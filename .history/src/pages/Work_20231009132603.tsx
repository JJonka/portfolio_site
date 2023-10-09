import Menu from "../components/Menu";
import styles from "./Work.module.scss";
import { ReactSVG } from "react-svg";
import Box from "../components/Box";
import EndOfSection from "../components/EndOfSection";



const Work = () => {
    return (
        <div className={styles.card}>
            <Menu></Menu>
            <div className={styles.container}>
                <h1 className={styles.header}>Projects</h1>
                <div className={styles.project}> 
                    <div className={styles.item1}>
                        <Box header={"Application for estate agents"} >
                            &emsp;The project involves working with a team of two seniors and few juniors to
                            create real estate agents manager. My responsibilities during creating the application
                            involves implementation of a form for adding new meetings. This project allows me to learn and
                            practice working in a group.
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
                <EndOfSection></EndOfSection>
                <div className={styles.project}> 
                    <div className={styles.item2}>
                        <Box header={"Technologies used:"}>
                            HTML  CSS  VanillaJS  JavaScript  Jira  Git
                        </Box>
                    </div>
                    <div className={styles.item1}>
                        <Box header={"Buisness Homepage"} >
                            <div>
                            &emsp;The project involved working in a group of two juniors and one senior
                            to create business homepage for a geodesic company. My responsibilities
                            included creating responsive views based on prepaired earlier mock-ups
                            and performing a code review.
                            </div>
                            <img src="/src/assets/dkart_logo.png" alt="dkart_logo"></img>
                        </Box>
                    </div>
                    <div className={styles.item3}>
                        <Box header={"Link to page:"}>
                            link
                        </Box>
                    </div>
                </div>
            </div>
            <EndOfSection
                height={"50px"}
                width={"50px"}            
            ></EndOfSection>
            <div className={styles.container}>
                <h1 className={styles.header}>Technologies I work with</h1>
                <div className={styles.logos}>
                    <div className={styles.line}>
                        <ReactSVG src="src\assets\techLogos\html.svg" className={styles.logo} />
                        <ReactSVG src="src\assets\techLogos\css.svg" className={styles.logo} />
                        <ReactSVG src="src\assets\techLogos\js.svg" className={styles.logo} />
                        <ReactSVG src="src\assets\techLogos\ts.svg" className={styles.logo} />
                        <ReactSVG src="src\assets\techLogos\react.svg" className={styles.logo} />
                    </div>
                    <div className={styles.line}>    
                        <ReactSVG src="src\assets\techLogos\git.svg" className={styles.logo} />
                        <ReactSVG src="src\assets\techLogos\sass.svg" className={styles.logo} />
                        <ReactSVG src="src\assets\techLogos\npm.svg" className={styles.logo} />
                        <ReactSVG src="src\assets\techLogos\yarn.svg" className={styles.logo} />
                    </div>
                    <div className={styles.line}>                    
                        <ReactSVG src="src\assets\techLogos\linux.svg" className={styles.logo} />
                        <ReactSVG src="src\assets\techLogos\windows.svg" className={styles.logo} />
                        <ReactSVG src="src\assets\techLogos\vsc.svg" className={styles.logo} />
                    </div>
                </div>
                
            </div>
        </div>
    )
};

export default Work;