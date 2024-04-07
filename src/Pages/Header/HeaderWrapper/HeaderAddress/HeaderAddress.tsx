import styles from './HeaderAddress.module.css';

const HeaderAddress = () => {
   return (
      <address className={styles.headerAddress}>
         <a className={styles.address__link} href="https://t.me/VitaliyGoncharenkoPMR">
            <span>Telegram:</span>VitaliyGoncharenkoPMR
         </a>
         <a className={styles.address__link} href="Goncharenko1610@yandex.ru">
            <span>E-mail:</span>Goncharenko1610@yandex.ru
         </a>
         <a className={styles.address__link} href="tel:+37377895764">
            <span>Телефон:</span>(+373) 778-957-64
         </a>
      </address>
   )
}

export default HeaderAddress

