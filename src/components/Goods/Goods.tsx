import React, { useState } from 'react';
import './Goods.css';
import { IData } from '../../types';

interface IGoodsProps {
  data: IData[];
}

function Goods(props: IGoodsProps) {
  // console.log(props.data[0]);

  const [goods, setGoods] = useState(props.data[0]);

  return (
    <div className='goods items'>
      <div className='items__cards'>
        <div
          className='items__cards_elem card'
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${goods.thumbnail})` }}
        >
          <div className='card__info'>
            <p className='card__info_row'>{`Категория: ${goods.category}`}</p>
            <p className='card__info_row'>{`Бренд: ${goods.brand}`}</p>
            <p className='card__info_row'>{`Цена: ${goods.price}`}</p>
            <p className='card__info_row'>{`Скидка: ${goods.sale}`}</p>
            <p className='card__info_row'>{`Рейтинг: ${goods.rating}`}</p>
          </div>
          <div className='card__actions'>
            <button className='card__actions_add button_products'>В корзину</button>
            <button className='card__actions_show-more button_products'>Подробнее</button>
          </div>
        </div>
      </div>
      <div className='items__lists'>
        <div className='items__lists_elem list'></div>
      </div>
    </div>
  );
}

export default Goods;
