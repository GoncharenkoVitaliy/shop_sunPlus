import styles from './MainCarousel.module.css';
import { ISetDate } from '../MainGeneral';
import CardsProduct from '../../../components/CardsProduct/CardsProduct';
import { useRef } from 'react';

const MainCarousel = ({ data }: { data: Array<ISetDate> }) => {
   const refContainerCard = useRef<HTMLDivElement>(null);

   const prevButton = () => { 
      if (refContainerCard.current) {
         refContainerCard.current.scrollLeft -= 250;
      }
   };

   const nextButton = () => { 
      if (refContainerCard.current) {
         refContainerCard.current.scrollLeft += 250;
      }
   };

   return (
      <div className={styles.wrapper__carousel}>
         <button
            className={styles.prev__button}
            onClick={prevButton}
         >
            <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
         </button>
         <div className={styles.container__card} ref={refContainerCard}>
            {data.map((d: ISetDate) => {
               if (d["popular"] === true) {
                  return (
                     <div className={styles.card} key={d.id}>
                        <CardsProduct d={d}/>
                     </div>
                  )
               }
               return null;
            })}
         </div>
         <button
            className={styles.next__button}
            onClick={nextButton}
         >
            <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
         </button>
      </div>
   )
}

export default MainCarousel;