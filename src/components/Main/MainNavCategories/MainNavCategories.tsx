import styles from './MainNavCategories.module.css';

const MainNavCategories = ({dataCategories}: {dataCategories: string[]}) => {
   console.log(dataCategories);
   return (
      <ul className={styles.filter__typeList}>
         {dataCategories.map((category: string) => {
            return (
               <li
                  className={styles.filter__typeItem}
                  key={category}
               >
                  <p className={styles.filter__p}></p>
                  {category}
               </li>
            )
         })}
      </ul>
   )
}

export default MainNavCategories
