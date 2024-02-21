import styles from './HeaderWrapper.module.css';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import HeaderAddress from '../HeaderAddress/HeaderAddress';
import HeaderBascet from '../HeaderBascet/HeaderBascet';

const HeaderWrapper = () => {
   return (
      <div className={`${styles.headerWrapper} container`}>
         <HeaderLogo/>
         <HeaderAddress/>
         <HeaderBascet/>
      </div> 
   )
}

export default HeaderWrapper
