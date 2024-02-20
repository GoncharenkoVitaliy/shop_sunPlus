import styles from './HeaderNav.module.css';

const HeaderNav = () => {
   return (
      <nav className={styles.header__navbar}>
         <ol className={`${styles.navbarList} ${styles.container}`}>
            <li className={styles.navbar__item}>
               <a href="#">Главная</a>
            </li>
            <li className={styles.navbar__item}>
               <a href="#">О компании</a>
            </li>
            <li className={styles.navbar__item}>
               <a href="#">Оплата и доставка</a>
            </li>
            <li className={styles.navbar__item}>
               <a href="#">Статьи</a>
            </li>
            <li className={styles.navbar__item}>
               <a href="#">Контакты</a>
            </li>
         </ol>
      </nav>
   )
}

export default HeaderNav
