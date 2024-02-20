import styles from './MainNav.module.css';

const MainNav = () => {
   return (
      <nav className={styles.menu__filters}>
               <div className={styles.filter__wrapper}>
                  <h2 className={styles.filter__title}>
                     Расширенный фильтр
                  </h2>
                  <ul className={styles.filter__catigories}>
                     <li className={styles.filter__manufacturer}> 
                        <h4>Производитель:</h4>
                        <ul className={styles.filter__manufacturerList}>
                           <li
                              className={styles.filter__manufacturerItem}
                           >
                              <p></p>Golf
                           </li>
                           <li
                              className={styles.filter__manufacturerItem}
                           >
                              <p></p>Kolpa-San
                           </li>
                        </ul>
                     </li>
                     <li className={styles.filter__type}>
                        <h4>Тип:</h4>
                        <ul className={styles.filter__typeList}>
                           <li className={styles.filter__typeItem}>
                              <p className={styles.filter__p}></p>
                              Прямоугольные
                           </li>
                        </ul>
                     </li>
                  </ul>
                  <button className={styles.button}>Изменить параметры поиска</button>
               </div>
            </nav>
   )
}

export default MainNav
