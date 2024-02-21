import HeaderAddress from '../Header/HeaderAddress/HeaderAddress';
import styles from './Footer.module.css';

const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className={`${styles.wrapper} container`}>
            <p className={styles.copyright}>
               © 2014 Все права защищены. «Сан-плюс»
            </p>
            <HeaderAddress/>
         </div>
      </footer>
   )
}

export default Footer
