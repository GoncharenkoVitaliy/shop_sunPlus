import styles from './PaymentDelivery.module.css';

const PaymentDelivery = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h1 className={styles.title}>Оплата и доставка</h1>
        <p className={styles.text}>Мы предлагаем различные способы оплаты, чтобы удовлетворить потребности каждого клиента. Вы можете оплатить заказ онлайн с помощью банковской карты или электронных платежных систем.</p>
        <p className={styles.text}>Мы также предоставляем услуги доставки. Мы сотрудничаем с надежными курьерскими службами, чтобы обеспечить быструю и безопасную доставку ваших заказов. Мы предлагаем как стандартную, так и экспресс-доставку в зависимости от вашего местоположения и предпочтений.</p>
        <p className={styles.text}>Мы гарантируем конфиденциальность и безопасность ваших платежных данных. Все транзакции обрабатываются с использованием защищенных протоколов и технологий шифрования, чтобы обеспечить вашу защиту от мошенничества и несанкционированного доступа.</p>
        <p className={styles.text}>Если у вас возникнут вопросы или проблемы с оплатой или доставкой, наша команда поддержки всегда готова помочь вам. Мы стремимся обеспечить удобство и удовлетворение каждого клиента на каждом этапе процесса покупки.</p>
      </div>
    </div>
  )
}

export default PaymentDelivery