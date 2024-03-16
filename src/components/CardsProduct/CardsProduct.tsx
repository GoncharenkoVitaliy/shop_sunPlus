import { ISetDate } from '../MainGeneral/MainGeneral';
import styles from './CardsProduct.module.css';


const CardsProduct: React.FC<{ d: ISetDate }> = ({ d }) => {

   return (
      <li className={styles.content__card}>
         <a className={styles.link} href="#" >
            <h3 className={styles.card__title}>{d.title}</h3>
            <img
               className={styles.card__image}
               src={d.image}
               alt="Товар"
               loading="lazy"
            />
            <ul className={styles.card__desc}>
               {Object.entries(d.description).map(([key, value]) => (
                  <li className={styles.card__elem} key={`${d.id}_${key}`}>
                     {`${key} - ${value}`}
                  </li>
               ))}
            </ul>
         </a>
      </li>
   )
}

export default CardsProduct
