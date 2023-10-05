import Menu from "../components/Menu"; 
import styles from "./HomePage.module.scss"

const  HomePage = () => {
    return (
      <div className={styles.card}>
        <Menu></Menu>
        <div className={styles.container}>
          <img src="/src/assets/stars.png" className={styles.imgTop}></img>
          <h1 className={styles.header}>Hello, world!<br />I'm Joanna.</h1>
          <h2 className={styles.introduction}>A junior frontend developer, <br />ready to work and gain experience.</h2>
          <img src="/src/assets/stars.png" className={styles.imgBottom}></img>
        </div>
      </div>
    )
}

export default HomePage;