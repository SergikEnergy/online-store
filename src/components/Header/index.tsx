import { Link } from 'react-router-dom';
import React from 'react';
import './Header.css';

function Header() {
  return (
    <>
      <header className='header'>
        <div className='wrapper wrapper__header'>
          <div className='header__logo'>
            <Link className='header__logo_link' to='/'>
              <img src={require('./../../assets/img/LogoStore.png')} alt='logo Store' />
              <span className='header__logo_text'>Item Store</span>
            </Link>
          </div>
          <div className='header__cash'>
            <span className='header__cash_total'>
              Итого: <span>0000</span>
            </span>
          </div>
          <div className='header__cart'>
            <Link to='/cart'>
              <img src={require('./../../assets/img/CartIcon.png')} alt='logo Store' />
              <div className='cart__count'>0</div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
