import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './Main.css';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Error from '../pages/Error';

function Main() {
  return (
    <>
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default Main;
