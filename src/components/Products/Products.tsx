import React from 'react';
import Goods from '../Goods/Goods';
import './Products.css';
import { IData } from '../../types';

interface IProductProps {
  product: IData[];
}

function Products(props: IProductProps) {
  return (
    <div className='products'>
      <div className='products__panel control'>
        <div className='control__sort'>
          <label htmlFor='sort-method'>Сортировать по:</label>
          <select className='select_sort' name='sort' id='sort-method'>
            <option value=''>--критерий--</option>
            <option value='price-Up'>Сначала дорогие</option>
            <option value='price-Down'>Сначала дешевые</option>
            <option value='rating-Up'>Сначала высокий рейтинг</option>
            <option value='rating-Down'>Сначала низкий рейтинг</option>
          </select>
        </div>
        <div className='control__find'>
          Найдено: <span className='find_item'>{props.product.length}</span>
        </div>
        <div className='control__search'></div>
        <div className='control__view'>
          <div className='control__view_card'>
            <button className='card_button'>Карточка</button>
          </div>
          <div className='control__view_list'>
            <button className='list_button'>Список</button>
          </div>
        </div>
      </div>

      <Goods data={props.product} />
    </div>
  );
}

export default Products;
