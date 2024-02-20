import MainCategories from '../MainCategories/MainCategories';
import MainNav from '../MainNav/MainNav';
import styles from './MainMenu.module.css';

const MainMenu = () => {
   return (
      <section className={styles.main__menu}>
            <h2 className="hidden">Расширенный фильтр а так же категории товаров</h2>
            <MainNav/>
            <MainCategories/>
         </section>
   )
}

export default MainMenu
