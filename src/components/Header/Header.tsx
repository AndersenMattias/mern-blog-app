import styles from '../../styles/components/_header.module.scss';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import { SidebarData } from './SidebarData';

import logo from '../../images/logo-img.jpg';
import SignIn from 'components/SignIn/SignIn';
import Button from 'components/Button/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuToggler = () => setMenuOpen((p) => !p);

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <span className={styles.logo}>Blog Away</span>
        </div>
        <div>
          <nav
            className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}
          >
            <a className={styles.nav__item} href={'/'}>
              Home
            </a>
            <a className={styles.nav__item} href={'/'}>
              About
            </a>
            <a className={styles.nav__item} href={'/'}>
              Support
            </a>
            <div className={styles.nav__button__container}>
              <Button colour='btn--primary' text='Log in' />
              <p>Not regist</p>
            </div>
          </nav>
        </div>
        <div>
          <div className={styles.header__button__container}>
            <Button colour='btn--primary' text='Log in' />
            <Button colour='btn--primary' text='Register' />
          </div>
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineClose />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
