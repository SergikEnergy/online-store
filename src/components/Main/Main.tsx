import { Route, Routes } from 'react-router-dom';
import React, { createContext } from 'react';
import './Main.css';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Error from '../pages/Error';
import Details from '../pages/Details';
import { data } from '../../data/data';
import { IData } from '../../types';

export const MainContext = createContext<IData[] | null>(null);

function Main() {
  return (
    <>
      <main className='main'>
        <div className='wrapper wrapper__main'>
          <MainContext.Provider value={data}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/details/:id/' element={<Details />} />
              <Route path='*' element={<Error />}></Route>
            </Routes>
          </MainContext.Provider>
        </div>
      </main>
    </>
  );
}

export default Main;
