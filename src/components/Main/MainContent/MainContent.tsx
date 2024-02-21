
import { useEffect, useState } from 'react';
import styles from './MainContent.module.css';
import Spinner from '../../spinner/Spinner';
import CardsProduct from '../../CardsProduct/CardsProduct';
// import axios from 'axios';

export interface ISetDate {
   id: number,
   image: string,
   categories: string,
   prace: number,
   popular: boolean | string,
   title: string,
   description: {
      discOn?: string,
      discTwo?: string,
      discThree?: string,
      discFour?: string,
      discFive?: string,
      discSix?: string,
      discSeven?: string,
      discEight?: string
   }
}

const MainContent = () => {
   const [data, setData] = useState<ISetDate[]>([]); 
   const [loading, setLoading] = useState(true);

   const getUsers = async() => {
      try{
         // const res = await axios.get("http://localhost:3031/product");

         const response = await fetch('db.json');
         const res = await response.json();

         setData(res.products);
         setLoading(false);
      }
      catch(error) {
         setLoading(false);
         console.error('Ошибка при загрузке данных:', error);
         return null;
      }
   };
         
   useEffect(() => {
      getUsers();
   }, []);

   return (
      <section className={styles.main__content}>
         <h2 className="hidden">Карточки товаров</h2>
         {loading
            ? <Spinner/>
            : <ul className={styles.content__product}>
                  {data.map((d) => {
                     return (
                        <CardsProduct d={d}  key={d.id}/>
                     )
                  })}
               </ul>
         }
      </section>
   )
}

export default MainContent
