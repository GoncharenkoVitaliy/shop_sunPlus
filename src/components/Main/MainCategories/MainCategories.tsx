import styles from './MainCategories.module.css';

const MainCategories = () => {

   return (
      <menu className={styles.menu__categories}>
         <li className={styles.categories__item}>
            Акриловые ванны
         </li>
         <li className={styles.categories__item}>
            Гидромассажные ванны
         </li>
         <li className={styles.categories__item}>
            Чугунные ванны
         </li>
         <li className={styles.categories__item}>
            Мебель для ванной
         </li>
         <li className={styles.categories__item}>
            Душевые панели и тропический душ
         </li>
         <li className={styles.categories__item}>
            Душевые уголки, двери
         </li>
         <li className={styles.categories__item}>
            Душевые поддоны
         </li>
         <li className={styles.categories__item}>
            Душевые кабины
         </li>
         <li className={styles.categories__item}>
            Смесители
         </li>
         <li className={styles.categories__item}>
            Шторки для ванн
         </li>
         <li className={styles.categories__item}>
            Унитазы, раковины, биде
         </li>
         <li className={styles.categories__item}>
            Полотенцесушители
         </li>
         <li className={styles.categories__item}>
            Стальные ванны
         </li>
         <li className={styles.categories__item}>
            Классические ванны
         </li>
         <li className={styles.categories__item}>
            Мраморные ванны
         </li>
         <li className={styles.categories__item}>
            Водонагреватели
         </li>
         <li className={styles.categories__item}>
            Аксессуары
         </li>
         <li className={styles.categories__item}>
            Эксклюзив
         </li>
      </menu>
   )
}

export default MainCategories
