import styles from './MainContent.module.css';
import Spinner from '../../spinner/Spinner';
import CardsProduct from '../../CardsProduct/CardsProduct';
import { ISetDate } from '../MainGeneral';


const MainContent = ({loading, data}: {loading: boolean, data: ISetDate[]}) => {

   return (
      <section className={styles.main__content}>
         <h2 className="hidden">Карточки товаров</h2>
         {loading
            ? <Spinner/>
            : <ul className={styles.content__product}>
               {data.map((d: ISetDate) => {
                  return (
                     <CardsProduct d={d} key={d.id}/>
                  )
               })}
            </ul>
         }
      </section>
   )
}

export default MainContent
