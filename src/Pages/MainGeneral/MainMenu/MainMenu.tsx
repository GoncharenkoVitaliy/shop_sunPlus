import styles from './MainMenu.module.css';
import { ISetDate } from '../MainGeneral';
import MainCategories from './MainCategories/MainCategories';
import MainNav from './MainNav/MainNav';

const MainMenu = ({data}: {data: Array<ISetDate>}) => {

   return (
      <section className={styles.main__menu}>
         <h2 className="hidden">Расширенный фильтр и категории товаров</h2>
         <div className={styles.wrapper}>
            <MainNav data={data}/>
            <MainCategories data={data}/>
         </div>
      </section>
   )
}

export default MainMenu
