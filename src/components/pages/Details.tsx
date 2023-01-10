import React, { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Details.css';
import { MainContext } from '../Main/Main';

type detailNum = {
  id: 'string';
};

function Details() {
  const params = useParams<detailNum>();
  // console.log(params, typeof params.id);
  const currentParam: number = Number(params.id);

  let values = useContext(MainContext);
  let currentDetail, photos;
  if (values) {
    currentDetail = values.find((elem) => elem.id === currentParam);
  }

  const [activeImg, setActiveImg] = useState(currentDetail?.urlToImages[0]);

  return (
    <div className='page details__page'>
      {(!values || values === undefined) && (
        <div className='nothing'>Ошибка! Данные о выбранном продукте не были получены!</div>
      )}
      <div className='detail__header'>
        {values && (
          <>
            <div className='header__links'>
              <Link className='go-home__link' to='/'>
                <span className='go-home__link_text'>Мини Маг</span>
              </Link>
            </div>
            <div className='go-home__space'>&gt;&gt;</div>
            <div className='header__links'>{currentDetail?.category}</div>
            <div className='go-home__space'>&gt;&gt;</div>
            <div className='header__links'>{currentDetail?.brand}</div>
          </>
        )}
      </div>
      <div className='detail__body'>
        <div className='photo__library'>
          {currentDetail &&
            currentDetail.urlToImages.map((item, index) => {
              return (
                <div
                  onClick={(elem: React.MouseEvent) => {
                    if (elem.target) {
                      let clickedImg = index;
                      console.log(index);

                      setActiveImg(clickedImg.toString());
                    }
                  }}
                  key={index}
                  className='photo__library_item'
                >
                  <img src={process.env.PUBLIC_URL + item} alt='accessories gallery' />
                </div>
              );
            })}
        </div>
        <div className='photo__library_item current_item'>
          {currentDetail && activeImg && (
            <img
              src={process.env.PUBLIC_URL + currentDetail?.urlToImages[+activeImg]}
              alt='accessories gallery'
            />
          )}
        </div>
        {currentDetail && (
          <>
            <div className='detail__body__description content'>
              <div className='content__text elem_block'>
                <p className='elem_title'>Описание</p>
                <p className='elem_body'>{currentDetail.description}</p>
              </div>
              <div className='content__discount elem_block'>
                <p className='elem_title'>Скидка %</p>
                <p className='elem_body'>{currentDetail.sale}</p>
              </div>
              <div className='content__rating elem_block'>
                <p className='elem_title'>Рейтинг</p>
                <p className='elem_body'>{currentDetail.rating}</p>
              </div>
              <div className='content__stock elem_block'>
                <p className='elem_title'>Остаток на складе</p>
                <p className='elem_body'>{currentDetail.stockBalance}</p>
              </div>
              <div className='content__brand elem_block'>
                <p className='elem_title'>Бренд</p>
                <p className='elem_body'>{currentDetail.brand}</p>
              </div>
              <div className='content__category elem_block'>
                <p className='elem_title'>Категория</p>
                <p className='elem_body'>{currentDetail.category}</p>
              </div>
            </div>
          </>
        )}
        {currentDetail && (
          <div className='order__block'>
            <div className='order__block_price'>{currentDetail.price} &#8364;</div>
            <div className='order__block_button'>
              <button className='addCart_button'>В корзину</button>
            </div>
            <div className='order__block_button'>
              <button className='buy_button'>Оформить</button>
            </div>
          </div>
        )}
      </div>
      <div className='go-home'>
        <Link to='/'>
          <button className='go-home__button'>Назад на главную</button>
        </Link>
      </div>
    </div>
  );
}
export default Details;
