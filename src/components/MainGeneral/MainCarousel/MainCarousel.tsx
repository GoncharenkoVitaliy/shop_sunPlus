import styles from './MainCarousel.module.css';
import { ISetDate } from '../MainGeneral';
import CardsProduct from '../../CardsProduct/CardsProduct';
import React from 'react';

const MainCarousel = ({data}: {data: Array<ISetDate>}) => {
   // console.log(data[0]['popular'])

   const prevBatton = (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log(event.target);
   }
   const nextButton = (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log(event.target);
   }

   return (
      <div className={styles.wrapper__carousel}>
         <button
            className={styles.prev__button}
            onClick={prevBatton}
         >
            <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
         </button>
         <div className={styles.container__card}>
            {data.map((d: ISetDate) => {
               if(d["popular"] == true){
                  return (
                     <div className={styles.card} key={d.id}>
                        <CardsProduct d={d}/>
                     </div>
                  )
               }
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

export default MainCarousel
