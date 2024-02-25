import styles from './Main.module.css';
import MainMenu from './MainMenu/MainMenu';
import MainContent from './MainContent/MainContent';
import Decor from '../Decor/Decor';

const Main = () => {
   return (
      <main className={`${styles.main} container`}>
         <Decor />
         <MainMenu/>
         <MainContent/>
      </main>
   )
}

export default Main
