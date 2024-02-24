import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h1>Контакты</h1>
        <p>Если у вас есть вопросы или нужна помощь, пожалуйста, свяжитесь с нами. Мы готовы помочь вам в любое время.</p>
        <p>Наш адрес:</p>
        <p>г. Москва, ул. Ленина, д. 10</p>
        <p>Телефон:</p>
        <p>+7 (495) 123-45-67</p>
        <p>Электронная почта:</p>
        <p>EMAIL</p>
        <p>Часы работы:</p>
        <p>Пн-Пт: 9:00 - 19:00</p>
        <p>Сб-Вс: выходной</p>
      </div>
    </div>
  )
}

export default Contacts;
