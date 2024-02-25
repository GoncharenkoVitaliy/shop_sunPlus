import styles from './Main.module.css';
import MainMenu from './MainMenu/MainMenu';
import MainContent from './MainContent/MainContent';
import Decor from '../Decor/Decor';
import { useState } from 'react';

const Main = () => {
   const [filter, setFilter] = useState(false);

   return (
      <main className={`${styles.main} container`}>
         <button
            className={styles.filter__button}
            onClick={() => setFilter(!filter)}
         >
            Фильтр
         </button>
         <div className={styles.wrapper__decor}>
            <Decor />
         </div>
         <div
            className={`
            ${styles.wrapper__menu} 
            ${filter
               ? styles.active__wrapper_menu
               : styles.wrapper__menu
            }`}
         >
            <p className={styles.burger_filter}></p>
            <MainMenu/>
         </div>
         <MainContent/>
      </main>
   )
}

export default Main
