import styles from './Decor.module.css';

const Decor = () => {
   return (
      <div className={`${styles.decor} container`}>
         <p className={styles.decorOne}></p>
         <p className={styles.decorTwo}></p>
      </div>
   )
}

export default Decor
