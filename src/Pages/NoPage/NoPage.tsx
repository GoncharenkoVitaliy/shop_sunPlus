import styles from './NoPage.module.css';

const NoPage = () => {
  return (
    <section className={`${styles.wrapper} container`}>
      <div className={styles.error}>
         <h1 className={styles.title}>404</h1>
         <p className={styles.textOne}>Страница не найдена</p>
         <p className={styles.textTwo}>Или неверный путь</p>
      </div>
    </section>
  )
}

export default NoPage
