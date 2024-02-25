import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Contacts from '../Pages/Contacts/Contacts';
import NoPage from '../Pages/NoPage/NoPage';
import About from '../Pages/About/About';
import PaymentDelivery from '../Pages/PaymentDelivery/PaymentDelivery';
import Articles from '../Pages/Articles/Articles';

function App() {

  return (
      <div className="App">
        <Header/>
        <Routes>
            <Route index path="/shop_sunplus/" element={<Main />} />
            <Route path="/shop_sunplus/about" element={<About />} />
            <Route path="/shop_sunplus/paymentDelivery" element={<PaymentDelivery />} />
            <Route path="/shop_sunplus/articles" element={<Articles />} />
            <Route path="/shop_sunplus/contact" element={<Contacts />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer/>
      </div>
  )
}

export default App
