import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h1 className={styles.title}>Контакты</h1>
        <p className={styles.text}>Если у вас есть вопросы или нужна помощь, пожалуйста, свяжитесь с нами. Мы готовы помочь вам в любое время.</p>
        <h4 className={styles.subtitle}>Наш адрес:</h4>
        <p className={styles.text}>г. Москва, ул. Ленина, д. 10</p>
        <h4 className={styles.subtitle}>Телефон:</h4>
        <p className={styles.text}>+7 (495) 123-45-67</p>
        <h4 className={styles.subtitle}>Электронная почта:</h4>
        <p className={styles.text}>EMAIL</p>
        <h4 className={styles.subtitle}>Часы работы:</h4>
        <p className={styles.text}>Пн-Пт: 9:00 - 19:00</p>
        <p className={styles.text}>Сб-Вс: выходной</p>
      </div>
    </div>
  )
}

export default Contacts;
