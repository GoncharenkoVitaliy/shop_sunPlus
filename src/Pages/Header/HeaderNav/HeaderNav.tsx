import styles from './HeaderNav.module.css';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const HeaderNav = () => {
   const [active, setActive] = useState(false);

   const refActive = useRef<HTMLDivElement>(null);

   const getActive = () => {
      setActive(!active);
   }

   useEffect(() => {
      if(!active) {return}

      const handleClick = (e: MouseEvent) => {
         if(!refActive.current) return; // Проверка наличия refActive.current
         const target = e.target as EventTarget & HTMLButtonElement;
         if (!refActive.current.contains(target)) {
            setActive(!active);
         }
      }
      
      document.addEventListener('click', handleClick);

      return () => {
         document.removeEventListener("click", handleClick)
      }
   }, [refActive, active])
   
   return (
      <>
         <nav
            className={`${styles.header__navbar} container`}
            >
            <ol
               className={`${styles.navbar__list} ${active ? styles.active__list : ''}`}
               >
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
            <div
               className={styles.burger__container}
               ref={refActive}
            >
               <button
                  className={`${active ? styles.active_burger__wrapper : styles.burger__wrapper}`}
                  onClick={getActive}
               >
                  <div className={styles.burger}></div>
               </button>
            </div>
            <Outlet />
         </nav>
         <Outlet />
      </>
   )
}

export default HeaderNav
