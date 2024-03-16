import styles from './HeaderBascet.module.css';
import bascet from '../../../images/header/bascet.png';

const HeaderBascet = () => {
   return (
      <div className={styles.header__basket}>
         <a className={styles.basket__link}>
            <img className={styles.basket__image} src={bascet} alt="иконка корзины" />
               <p className={styles.basket__title}>Корзина</p>
               <p className={styles.basket__count}>
                  <span id="count">3</span> товара,
               </p>
               <p className={styles.basket__summa}>
                  на сумму <span id="summa"> 35 000 руб.</span>
               </p>
         </a>
      </div>
   )
} 

export default HeaderBascet;