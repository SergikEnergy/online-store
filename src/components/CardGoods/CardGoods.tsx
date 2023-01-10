import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { IData } from '../../types';
import './CardGoods.css';

interface IGoodsProps {
  productCards: IData;
}

function CardGoods(productCards: IGoodsProps) {
  const itemsCard = productCards.productCards;
  // console.log(itemsCard);

  const [cartClick, setCartClick] = useState(false);
  const [showMoreClick, setShowMoreClick] = useState(false);

  const btnCartClassName = cartClick ? 'active_button' : '';
  const btnCartClasses = ['card__actions_add button_products', btnCartClassName];

  function showCartPage() {
    setShowMoreClick((isClick) => {
      console.log('click details');

      return !isClick;
    });
  }

  return (
    <div
      className='items__cards_elem card'
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${itemsCard.thumbnail})` }}
    >
      <div className='card__info'>
        <p className='card__info_row'>{`Категория: ${itemsCard.category}`}</p>
        <p className='card__info_row'>{`Бренд: ${itemsCard.brand}`}</p>
        <p className='card__info_row'>{`Цена: ${itemsCard.price}`}</p>
        <p className='card__info_row'>{`Скидка: ${itemsCard.sale}`}</p>
        <p className='card__info_row'>{`Рейтинг: ${itemsCard.rating}`}</p>

        {/* {cartClick && (
          <>
            <p className='card__info_row'>{`Описание: ${itemsCard.description}`}</p>
          </>
        )} */}
      </div>
      <div className='card__actions'>
        <button
          onClick={() => {
            setCartClick((isAdd) => {
              return !isAdd;
            });
          }}
          className={btnCartClasses.join(' ')}
        >
          {cartClick ? 'Из корзины' : 'В корзину'}
        </button>
        <Link to={`/details/${itemsCard.id}`}>
          <button className='card__actions_show-more button_products'>Подробнее</button>
        </Link>
      </div>
    </div>
  );
}

export default CardGoods;
