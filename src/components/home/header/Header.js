import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Person4Icon from '@mui/icons-material/Person4';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  window.addEventListener("scroll" , function () {
    const header = document.querySelector('.header')
    header.classList.toggle('active',window.scrollY > 200)
  })
  return (
    <>
      <header className="header">
        <div className="container flex">
          <div className="logo" >
            <img src="logo.png" alt="" style={{'height' : '30px'}} />
          </div>
          <div className="nav">
            <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)} >
              <li> <Link to='/'>HOME </Link> </li>
              <li> <Link to='/pages'>PAGES </Link> </li>
              <li> <Link to='/portfolio'>PORTFOLIO </Link> </li>
              <li> <Link to='/blogs'>BLOGS </Link> </li>
              <li> <Link to='/elements'>ELEMENTS </Link> </li>
              <li> <Link to='/shop'>SHOP </Link> </li>
            </ul>
          </div>
          <div className="icon">
            <SearchIcon className='HeaderIcon' />
            <Person4Icon className='HeaderIcon' />
          </div>
          <button className= 'navbar-items-icon' onClick={() => setSidebar(!sidebar)}>
            {sidebar ? <CloseIcon /> : <MenuIcon /> }
          </button>
        </div>
      </header>
    </>
  )
}

export default Header;