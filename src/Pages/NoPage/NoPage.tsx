import styles from './NoPage.module.css';

const NoPage = () => {
  return (
    <section className={styles.wrapper}>
      <div>
         <h1 className={styles.title}>404</h1>
         <p>Страница не найдена</p>
         <p>Или неверный путь</p>
      </div>
    </section>
  )
}

export default NoPage
