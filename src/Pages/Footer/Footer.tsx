import styles from './Footer.module.css';
import HeaderAddress from '../../Pages/Header/HeaderWrapper/HeaderAddress/HeaderAddress';

const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className={`${styles.wrapper} container`}>
            <p className={styles.copyright}>
               © 2014 Все права защищены. <span>«Сан-плюс»</span>
            </p>
            <div className={styles.wrapper__adres}>
               <HeaderAddress/>
            </div>
         </div>
      </footer>
   )
}

export default Footer
