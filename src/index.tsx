import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <div className='gradient'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


