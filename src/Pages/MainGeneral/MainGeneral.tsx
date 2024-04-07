import styles from './MainGeneral.module.css';
import MainMenu from './MainMenu/MainMenu';
import MainContent from './MainContent/MainContent';
import Decor from '../../components/Decor/Decor';
import { useEffect, useRef, useState } from 'react';
import MainCarousel from './MainCarousel/MainCarousel';
// import useClickOutside from '../../components/useClickOutside/useClickOutside';

export type descriptionType = string | number | boolean;

export interface ISetDate {
   id: number,
   manufacturer: string,
   image: string,
   categories: string,
   prace: number,
   popular: boolean,
   title: string,
   description: {
      [key: string]: descriptionType;
   }
}

const Main = () => {
   const [filter, setFilter] = useState(false);
   const [loading, setLoading] = useState(true);
   const [data, setData] = useState<ISetDate[]>([]);
   
   const refButton = useRef<HTMLDivElement>(null);
   // useClickOutside(refButton, () => {
   //    if(filter) {
   //       setTimeout(() => setFilter(!filter), 50)
   //    }
   // });

   // читаем данные из файла db.json
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

   function filterOf () {
      setFilter(!filter);
   } 
         
   useEffect(() => {
      getProducts();

      if(!filter){return}

      const handleClick = (e: MouseEvent) => {
         if(!refButton.current) return;
         const target = e.target as EventTarget & HTMLButtonElement;
         if (!refButton.current.contains(target)) {
            setFilter(!filter);
         }
      }
      
      document.addEventListener('click', handleClick);

      return () => {
         document.removeEventListener("click", handleClick)
      }
   }, [refButton, filter]);

   return (
      <section className={styles.main}>
         <div className={styles.main__carousel}>
            <MainCarousel  data={data}/>
         </div>
         <div className={styles.wrapper__decor}>
            <Decor />
         </div>
         <main
            className={`${styles.main__general}`}
            ref={refButton}
            onClick={filterOf}
         >
            <div
               className={styles.wrapper__button}
            >
               <button className={styles.button}>
                  Фильтр
               </button>
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
      </section>
   )
}

export default Main
