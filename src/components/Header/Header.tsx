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
         </header>
      </>
   )
}

export default Header
