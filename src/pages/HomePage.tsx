import Card from "../components/Card";
import Menu from "../components/Menu"; 
import styles from "./HomePage.module.scss"

const  HomePage = () => {
    return (
      <Card>
        <div className={styles.container}>
        <Menu></Menu>
          <img src="..\src\assets\stars2.svg" className={styles.imgTop}></img>
          <h1 className={styles.header}>Hello, world!<br />I'm Joanna.</h1>
          <h2 className={styles.introduction}>A junior frontend developer, <br />ready to work and gain experience.</h2>
          <img src="..\src\assets\stars.svg" className={styles.imgBottom}></img>
        </div>
      </Card>
    )
}

export default HomePage;