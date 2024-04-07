import styles from './MainNavManufacturer.module.css';

const MainNavManufacturer = ({dataManufacturer}:{dataManufacturer: string[]}) => {
   return (
      <ul className={styles.filter__manufacturerList}>
         {
            dataManufacturer.map((m: string) => {
               return (
                  <li
                     key={m}
                     className={styles.filter__manufacturerItem}
                  >
                     <p></p>{m}
                  </li>
               )
            })
         }
      </ul>
   )
}

export default MainNavManufacturer
