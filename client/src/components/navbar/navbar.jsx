import React from 'react';
import { useTranslation } from 'react-i18next';
import './navbar.css';

function Navbar() {
 const { t } = useTranslation();
 return (
   <nav className='navbar'>
     <div className='left'>
       <img src="./Rashtriya-Ispat-Nigam.jpg" className='navimg' alt="Left" />
       <a href="/" className='nav-head'>{t('Rashtriya Ispat Nigam')}</a>
     </div>
     <div className='right'>
       <a href="/login">
         <button className='loginBtn'>{t('Login')}</button>
       </a>
       <img src="./SIH.jpeg" className='navimg rightImg' alt="Right" />
     </div>
   </nav>
 );
}

export default Navbar;
