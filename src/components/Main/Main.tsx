import styles from './Main.module.css';
import MainMenu from './MainMenu/MainMenu';
import MainContent from './MainContent/MainContent';
import Decor from '../Decor/Decor';
import { useEffect, useState } from 'react';

export interface ISetDate {
   id: number,
   manufacturer: string,
   image: string,
   categories: string,
   prace: number,
   popular: boolean,
   title: string,
   description: {
      "Установка ванны"?: string,
      "Длина, см"?: number,
      "Ширина, см"?: number,
      "Форма"?: string,
      "Конструкция дверей"?: string,
      "Количество секций дверей"?: number,
      "Толщина материала дверей, мм"?: number,
      "Цвет полотна дверей"?: string,
      "Тумба подвесная"?: boolean,
      "Раковина"?: string,
      "зеркало"?: string,
      "Шкаф-Пенал"?: string,
      "Материал"?: string,
      "Форма душа"?: string,
      "Высота штанги, см"?: number,
      "Размер верхнего душа, мм"?: number,
      "Высота, см"?: number,
   }
}

const Main = () => {
   const [filter, setFilter] = useState(false);
   const [loading, setLoading] = useState(true);
   const [data, setData] = useState<ISetDate[]>([]);
   
   const getProducts = async() => {
      try{
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
      getProducts();
   }, []);

   return (
      <main className={`${styles.main} container`}>
         <div
            className={styles.wrapper__button}
            onClick={() => setFilter(!filter)}
         >
            <button className={styles.button}>
               Изменить параметры поиска
            </button>
         </div>
         <div className={styles.wrapper__decor}>
            <Decor />
         </div>
         <div
            className={`
            ${styles.wrapper__menu} 
            ${filter
               ? styles.active__wrapper_menu
               : styles.wrapper__menu
            }`}
         >
            <MainMenu data={data}/>
         </div>
         <MainContent loading={loading} data={data}/>
      </main>
   )
}

export default Main
