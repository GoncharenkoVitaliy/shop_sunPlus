import { useEffect, useState } from 'react';
import styles from './MainContent.module.css';
import axios from 'axios';
import Spinner from '../../spinner/Spinner';
import CardsProduct from '../../CardsProduct/CardsProduct';
import dbData from '../../../../db.json'

export interface ISetDate {
   id: number,
   image: string,
   categories: string,
   prace: number,
   popular: boolean,
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
   const [loading, setLoading] = useState(false);

   // const getUsers = async() => {
      // try{
         // const res = await axios.get("http://localhost:3031/product");
         // setData(res.data);
      // }
      // catch(err) {
         // Error handling
         // setLoading(false);
         // console.log(err);
         // return null;
   //    }
   // };

   useEffect(() => {
         // getUsers();

      // Выполняем преобразование JSON внутри useEffect или других методов жизненного цикла
    const productsArray = dbData.product;
      setData(productsArray);
   }, []);

   return (
      <section className={styles.main__content}>
         <h2 className="hidden">Товары</h2>
         {loading
            ? <Spinner/>
            :  <ul className={styles.content__product}>
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
