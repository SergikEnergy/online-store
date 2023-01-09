import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className='wrapper wrapper__footer'>
          <div className='footer__git'>
            <a className='footer__git_link' href='https://github.com/SergikEnergy'>
              <img src={require('./../../assets/img/GHlogo.png')} alt='logo GitHub' />
              <span className='footer__git_account'>SergikEnergy</span>
            </a>
          </div>
          <div className='footer__text'>Создан в 2023г</div>
          <div className='footer__rs'>
            <a className='footer__rs_link' href='https://rs.school/js'>
              <img src={require('./../../assets/img/RSlogo.png')} alt='logo RS School' />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
