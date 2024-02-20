import styles from './HeaderLogo.module.css';
import kapliaLogo from '../../images/header/kaplia-logo.png';

import React from 'react'

const HeaderLogo = () => {
   return (
      <div className={styles.headerLogo}>
            <a href="#" className={styles.logoLink}>
               <div className={styles.logoWrapImg}>
                  <p className={`${styles.logoImg} ${styles.one}`}>
                     <img src={kapliaLogo} alt="капли-логотип"/>
                  </p>
                  <p className={`${styles.logoImg} ${styles.two}`}>
                     <img src={kapliaLogo} alt="капли-логотип" />
                  </p>
                  <p className={`${styles.logoImg} ${styles.three}`}>
                     <img src={kapliaLogo} alt="капли-логотип" /></p>
               </div>
               <div className={styles.logoTextBlock}>
                  <p className={styles.logoTitle}>Сан-плюс</p>
                  <p className={styles.logoSubtitle}>Вся сантехника</p>
               </div>
            </a>
         </div>
   )
}

export default HeaderLogo
