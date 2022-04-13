import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { RestaurantsCreate } from './components/RestaurantsCreate';
import { ProductsCreate } from './components/ProductsCreate';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <div className='gradient'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/createRestaurants' element={<RestaurantsCreate />}></Route>
          <Route path='/createProducts' element={<ProductsCreate />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


