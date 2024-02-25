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
                  <Link to="/shop_sunplus/">Главная</Link>
               </li>
               <li className={styles.navbar__item}>
                  <Link to="/shop_sunplus/about">О компании</Link>
               </li>
               <li className={styles.navbar__item}>
                  <Link to="/shop_sunplus/paymentDelivery">Оплата и доставка</Link>
               </li>
               <li className={styles.navbar__item}>
                  <Link to="/shop_sunplus/articles">Статьи</Link>
               </li>
               <li className={styles.navbar__item}>
                  <Link to="/shop_sunplus/contact">Контакты</Link>
               </li>
            </ol>
            <button
               className={styles.burger__wrapper}
               onClick={() => setActive(!active)}
            >
               <div className={styles.burger}></div>
            </button>
            <Outlet />
         </nav>
         <Outlet />
      </>
   )
}

export default HeaderNav
