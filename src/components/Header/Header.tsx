import styles from './Header.module.css';
import HeaderNav from './HeaderNav/HeaderNav';
import HeaderWrapper from './HeaderWrapper/HeaderWrapper';

const Header = () => {
   
   return (
      <>
         <header className={styles.header}>
            <div className={styles.headerImage}>
               <HeaderWrapper />
               <HeaderNav/>
            </div>
            <div className={`${styles.headerDecor} container`}>
               <p className={styles.headerDecorOne}></p>
               <p className={styles.headerDecorTwo}></p>
            </div>
         </header>
      </>
   )
}

export default Header
