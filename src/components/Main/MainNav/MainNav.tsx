import MainNavCategories from '../MainNavCategories/MainNavCategories';
import MainNavManufacturer from '../MainNavManufacturer/MainNavManufacturer';
import styles from './MainNav.module.css';

const MainNav = ({data}: {data: Array<{manufacturer: string, categories: string}>}) => {
   const dataManufacturer: string[] = [...new Set(data.map((d) => d.manufacturer))];
      
   const dataCategories: string[] = [...new Set(data.map((c) => c.categories))];

   return (
      <nav className={styles.menu__filters}>
         <div className={styles.filter__wrapper}>
            <h2 className={styles.filter__title}>
               Расширенный фильтр
            </h2>
            <ul className={styles.filter__catigories}>
               <li className={styles.filter__manufacturer}> 
                  <h4>Производитель:</h4>
                  <MainNavManufacturer
                     dataManufacturer={dataManufacturer}
                  />
               </li>
               <li className={styles.filter__type}>
                  <h4>Тип:</h4>
                  <MainNavCategories
                     dataCategories={dataCategories}
                  />
               </li>
            </ul>
         </div>
      </nav>
   )
}

export default MainNav
