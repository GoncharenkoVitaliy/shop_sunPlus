import styles from './Main.module.css';
import MainMenu from './MainMenu/MainMenu';
import MainContent from './MainContent/MainContent';

const Main = () => {
   return (
      <main className={`${styles.main} container`}>
         <MainMenu/>
         <MainContent/>
      </main>
   )
}

export default Main
