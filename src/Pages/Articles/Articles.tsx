import { useEffect, useState } from 'react';
import styles from './Articles.module.css';
import Spinner from '../../components/spinner/Spinner';

interface ISetArticles {
  id: number;
  title: string;
  text: string;
}

const Articles = () => {
  const [load, setLoad] = useState(true);
  const [articles, setArticles] = useState<ISetArticles[]>([]);
  
  const getArticles = async() => {
    try{
      const response = await fetch('articlesArray.json');
        const res = await response.json();
        console.log(`resArticles ${res}`);
        
        setArticles(res.articles);
        setLoad(false);
    }
    catch(error) {
        setLoad(false);
        console.error('Ошибка при загрузке данных:', error);
        return null;
    }
  };
    
  useEffect(() => {
    getArticles();
  }, []);
  
  return (
    <div className="container">
      <h1>Статьи</h1>
      <p>Мы регулярно публикуем статьи и полезные материалы, чтобы помочь нашим клиентам получить больше информации о сантехнике и аксессуарах для ванных комнат.</p>
      <p>В наших статьях мы обсуждаем различные темы, такие как выбор сантехники, установка и обслуживание, дизайн ванных комнат и многое другое. Мы стремимся предоставить нашим читателям полезные советы и рекомендации, чтобы помочь им принять информированные решения при покупке сантехники.</p>
      <p>Мы также приглашаем экспертов и профессионалов в области сантехники, чтобы поделиться своим опытом и знаниями. Это позволяет нашим читателям получить доступ к самой актуальной и полезной информации в отрасли.</p>
      <p>Мы надеемся, что наши статьи помогут вам расширить свои знания о сантехнике и аксессуарах для ванных комнат, а также сделать правильный выбор при покупке.</p>
      {load
        ? <Spinner/>
        : <ul>
            {articles.map((article) => {
              return (
                <li className={styles.article} key={article.id}>
                  <h2>{article.id}. {article.title}</h2>
                  <p>{article.text}</p>
                </li>
              )
            })}
          </ul>
      }
    </div>
  )
}

export default Articles
