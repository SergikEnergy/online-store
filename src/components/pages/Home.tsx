import React from 'react';
import Filters from './../Filters/Filter';
import { data } from '../../data/data';
import Products from './../Products/Products';

function Home() {
  return (
    <>
      <div className='page home_page'>
        <Filters />
        <Products product={data} />
      </div>
    </>
  );
}

export default Home;
