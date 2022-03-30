import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import LeftSide from '../LeftSide/LeftSide';
import Footer from '../Footer/Footer';
import './Main.css';
import YaziEkle from '../../components/YaziEkle';
import YaziDetayi from '../../components/YaziDetayi';
import YaziListesi from "../../components/YaziListesi";
import YaziDuzenle from '../../components/YaziDuzenle';
const Main = () => {
  return (
    <div className='contaniner-fluid'>
      <div className='row'>
        <div className='col-12 header-area'>
          <Header />
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-2 col-md-3 col-sm-12 leftside-area'>
          <LeftSide />
        </div>
        <div className='col-lg-10 col-md-9 col-sm-12 content-area'>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path="/" exact element={<YaziListesi />} />
              <Route path="/posts/:id" exact element={<YaziDetayi />} />
              <Route path="/yaziekle" element={<YaziEkle />} />
              <Route path="/post/:id/edit" element={<YaziDuzenle />} />
            </Routes>
          </Suspense>
        </div>
        <div className='row'>
          <div className='footer-area'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Main;

// component={YaziListesi}  
// component={YaziDetayi}