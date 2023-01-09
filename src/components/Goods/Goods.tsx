import React from 'react';
import './Goods.css';
import CardGoods from '../CardGoods/CardGoods';
import { IData } from '../../types';

interface IGoodsProps {
  data: IData[];
}

function Goods(props: IGoodsProps) {
  const itemsProduct = props.data;
  console.log(itemsProduct, typeof itemsProduct);

  return (
    <div className='goods items'>
      <div className='items__cards'>
        {itemsProduct.map((item, index) => {
          return <CardGoods key={item.id} productCards={item} />;
        })}
      </div>
      <div className='items__lists'>
        <div className='items__lists_elem list'></div>
      </div>
    </div>
  );
}

export default Goods;
