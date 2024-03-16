import styles from './MainCarousel.module.css';
import { ISetDate } from '../MainGeneral';
import CardsProduct from '../../CardsProduct/CardsProduct';

const MainCarousel = ({data}: {data: Array<ISetDate>}) => {
   // console.log(data[0]['popular'])

   return (
      <div className={styles.wrapper__carousel}>
         {data.map((d: ISetDate) => {
                  if(d["popular"] == true){
                     return (
                        <CardsProduct d={d} key={d.id}/>
                     )
                  }
               })}
      </div>
   )
}

export default MainCarousel
