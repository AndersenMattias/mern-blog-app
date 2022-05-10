import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SidebarData } from './SidebarData';

import './Navbar.css';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import logo from '../../images/logo-img.jpg';

const Navbar = () => {
  const [sidebar, setSideBar] = useState<boolean>(false);

  const showSidebar = () => setSideBar(!sidebar);

  return (
    <>
      <p className='nav-pTag'>Share your Experiences</p>
      <div className='navbar'>
        <div className='siteLogo-container'>
          <img className='siteLogo' src={logo} alt='logo-img' />
        </div>
        <div>
          <Link to='#' className='hamburger-icon'>
            <MenuIcon sx={{ fontSize: '3em' }} onClick={showSidebar} />
          </Link>
        </div>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='close-icon'>
              <CloseIcon />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
