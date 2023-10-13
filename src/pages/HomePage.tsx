import Card from "../components/Card";
import Copyright from "../components/Copyright";
import Menu from "../components/Menu"; 
import Transitions from "../components/Transitions";
import styles from "./HomePage.module.scss"

const  HomePage = () => {
    return (
      <Card>
        <Menu></Menu>
        <div className={styles.container}>
          <Transitions>
            <img src="/assets/stars2.svg" className={styles.imgTop}></img>
            <h1 className={styles.header}>Hello, world!<br />I'm Joanna.</h1>
            <h2 className={styles.introduction}>A junior front end developer, <br />ready to work and gain experience.</h2>
            <img src="/assets/stars.svg" className={styles.imgBottom}></img>
          </Transitions>
        </div>
        <Transitions>
          <Copyright></Copyright>
        </Transitions>
      </Card>
    )
}

export default HomePage;