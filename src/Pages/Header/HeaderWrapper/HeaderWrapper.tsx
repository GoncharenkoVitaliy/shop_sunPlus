import styles from './HeaderWrapper.module.css';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderAddress from './HeaderAddress/HeaderAddress';
import HeaderBascet from './HeaderBascet/HeaderBascet';

const HeaderWrapper = () => {
   return (
      <div className={`${styles.headerWrapper} container`}>
         <HeaderLogo/>
         <div className={styles.wrapper__adres}>
            <HeaderAddress/>
         </div>
         <HeaderBascet/>
      </div> 
   )
}

export default HeaderWrapper
