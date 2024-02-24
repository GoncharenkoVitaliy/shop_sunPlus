import { useState } from 'react';
import styles from './HeaderNav.module.css';
import { Link, Outlet } from 'react-router-dom';

const HeaderNav = () => {
   const [active, setActive] = useState(false);
   
   return (
      <>
         <nav className={`${styles.header__navbar} container`}>
            <ol className={`${styles.navbar__list} ${active ? styles.active__list : ''}`}>
               <li className={styles.navbar__item}>
                  <Link to="/">Главная</Link>
               </li>
               <li className={styles.navbar__item}>
                  <Link to="/about">О компании</Link>
               </li>
               <li className={styles.navbar__item}>
                  <Link to="/paymentDelivery">Оплата и доставка</Link>
               </li>
               <li className={styles.navbar__item}>
                  <Link to="/articles">Статьи</Link>
               </li>
               <li className={styles.navbar__item}>
                  <Link to="/contact">Контакты</Link>
               </li>
            </ol>
            <button
               className={styles.burger__wrapper}
               onClick={() => setActive(!active)}
            >
               <div className={styles.burger}></div>
            </button>
         </nav>
         <Outlet />
      </>
   )
}

export default HeaderNav
