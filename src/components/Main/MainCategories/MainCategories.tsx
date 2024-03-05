
// import { Dispatch } from '@reduxjs/toolkit';
import { ISetDate } from '../Main';
import styles from './MainCategories.module.css';
import { useEffect, useState } from 'react';

const MainCategories = ({data}: {data: Array<ISetDate>}) => {
   const [uniqueDescriptions, setUniqueDescriptions] = useState<string[]>([]);
   
   // из data дастаем description{}
   const variable: object[] = [];
   // из variable достаем key[]
   const keyDescription: string[] = [];

   const dataDescriptionFunc = () => {
      data.forEach((item) => {
         variable.push(item.description);
      })

      variable.flatMap((element) => {
         for(let i = 0; i < Object.keys(element).length; i++){
            for(const key in element){
               keyDescription.push(key);
            }
         }
      })

      setUniqueDescriptions( () => {
         return [...new Set(keyDescription)]
      }) 
   }

   useEffect(() => {
      dataDescriptionFunc();
   }, [])

   return (
      <menu className={styles.menu__categories}>
         {uniqueDescriptions.map((element, key) => {
            return (
               <li className={styles.categories__item} key={key}>
                  {element}
               </li>
            )
         })}
      </menu>
   )
}

export default MainCategories
