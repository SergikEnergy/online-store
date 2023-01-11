import React, { useState } from 'react';
import { data } from '../../data/data';
import './Cart.css';
import ModalWrapper from '../Modal/ModalWrapper';

function Cart() {
  const tryItem = [data[0], data[1]];

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  function toggleModal() {
    setIsModalVisible((wasVisible) => !wasVisible);
  }

  return (
    <div className='page cart_page'>
      <div className='product__content'>
        <div className='product__content__header cart_header'>
          <p className='cart_header__title'>
            Продуктов в корзине: <span>{tryItem.length}</span>
          </p>
          <p className='cart_header__title_limit'>
            Показать продуктов:{' '}
            <span className='limit_count'>
              <input
                type='number'
                min='1'
                max='4'
                step='1'
                value='3'
                className='limit_count_input'
                onChange={() => {}}
              />
            </span>
          </p>
          <div className='cart_header__title_pages'>
            Страница:
            <div className='title_pages__container'>
              <div className='title_pages__container_arrow-left'>&lt;</div>
              <div className='title_pages__container_page-number page-number'>1</div>
              <div className='title_pages__container_arrow-right'>&gt;</div>
            </div>
          </div>
        </div>
        <div className='product__content__body cart_body'>
          <p className='cart_body_number'>1</p>
          <p className='cart_body_img'>
            {' '}
            <img src={process.env.PUBLIC_URL + tryItem[0].urlToImages[0]} alt='goods in cart' />
          </p>
          <div className='cart_body_descr'>
            <p className='cart_body_descr_brand'>{tryItem[0].brand}</p>
            <p className='cart_body_descr_description'>{tryItem[0].description}</p>
            <div className='cart_body_descr_statistics'>
              <p className='cart_body_descr_rate'>Рейтинг: {tryItem[0].rating}</p>
              <p className='cart_body_descr_discount'>Скидка: {tryItem[0].sale}</p>
            </div>
          </div>
          <div className='cart_body_quantity'>
            <p className='cart_body_quantity_stock'>Остаток: {tryItem[0].stockBalance}</p>
            <div className='cart_body_quantity_select_block'>
              <p className='cart_body_quantity_select_block-more'>+</p>
              <p className='cart_body_quantity_select_block-count'>1</p>
              <p className='cart_body_quantity_select_block-less'>-</p>
            </div>
            <p className='cart_body_quantity_price'>&#8364; {tryItem[0].price}</p>
          </div>
        </div>
      </div>
      <div className='product__calc'>
        <div className='product__calc__header'>Стоимость:</div>
        <div className='product__calc__body'>
          <div className='product__calc__body_count'>{0}</div>
          <div className='product__calc__body_promo'></div>
          <div className='product__calc__body_buy'>
            <button onClick={toggleModal} className='buy-now_button'>
              Оформить покупки
            </button>
            <ModalWrapper isModalVisible={isModalVisible} onBackClick={toggleModal} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
