
// import { Dispatch } from '@reduxjs/toolkit';
// import { ISetDate, descriptionType } from '../Main';
import { ISetDate } from '../Main';
import styles from './MainCategories.module.css';
import { useEffect, useState } from 'react';

const MainCategories = ({data}: {data: ISetDate[]}) => {
   console.log(data);
   const [uniqueDescriptions, setUniqueDescriptions]: any = useState([]);
   // const [uniqueDescriptions, setUniqueDescriptions]: [descriptionType[], Dispatch<SetStateAction<descriptionType[]>>] = useState([]);
   
   const dataDescriptionFunc = () => {
      setUniqueDescriptions(() => {
         return Array.from(new Set(data.flatMap((product) => Object.values(product.description))))
      });

      // console.log(uniqueDescriptions);
   }

   useEffect(() => {
      dataDescriptionFunc();
   }, [])

   return (
      <menu className={styles.menu__categories}>
         {uniqueDescriptions.map((item: any) => {
            return (
               <li className={styles.categories__item} key={item}>
                  {item}
               </li>
            )
         })}
      </menu>
   )
}

export default MainCategories
