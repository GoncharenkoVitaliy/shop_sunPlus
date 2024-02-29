import MainCategories from '../MainCategories/MainCategories';
import MainNav from '../MainNav/MainNav';
import styles from './MainMenu.module.css';

const MainMenu = ({data}: {data: Array<{manufacturer: string, categories: string}>}) => {
   // console.log(data);

   return (
      <section className={styles.main__menu}>
         <h2 className="hidden">Расширенный фильтр и категории товаров</h2>
         <div className={styles.wrapper}>
            <MainNav data={data}/>
            <MainCategories />
         </div>
      </section>
   )
}

export default MainMenu
