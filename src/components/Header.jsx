import '../css/header.css'
import { useState } from 'react';

function Header({ setPage }) {

  const [hideInMobileSize, setHideInMobileSize] = useState(true);

  function go(event, page) {
    event.preventDefault();
    setPage(page);
  }

  function nothingHappen(event) {
    event.preventDefault();
  }

  function toggleMenu() {
    setHideInMobileSize(!hideInMobileSize)
  }

  return (
    <header>
          <img src="/images/jake-melara-Yh6K2eTr_FY-unsplash.jpg" alt="Logo" className="logo" />
      <h1>Hiking & Nature</h1>
      <nav>
        <button className='tog' onClick={toggleMenu} aria-label="tog menu button">
          <div></div>
          <div></div>
          <div></div>
        </button>
        <ul className={hideInMobileSize ? 'globalnav__menu hideInMobileSize' : 'globalnav__menu'}>
          <li className='globalnav__menu__item'><a href="" onClick={e => go(e, 'home')}>Home</a></li>
          <li className='globalnav__menu__item'>
            <a href="" onClick={e => nothingHappen(e)}>Sightseeing &nbsp; </a>
            <ul>
              <li><a href="" onClick={e => go(e, 'Hiking')}> In seasons</a></li>
                          <li><a href="" onClick={e => go(e, 'Hometown_Mountain')}>In US </a></li>
            </ul>
          </li>
          <li className='globalnav__menu__item'><a href="" onClick={e => go(e, 'knowledge')}>Tips</a></li>
          <li className='globalnav__menu__item'><a href="" onClick={e => go(e, 'join')}>Hike now</a></li>
        </ul>
      </nav>
    </header >
  )
}

export default Header;