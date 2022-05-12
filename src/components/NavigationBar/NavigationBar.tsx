import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SidebarData } from './SidebarData';

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import * as Icon from 'react-bootstrap-icons';

import './NavigationBar.css';

import logo from '../../images/logo-img.jpg';
import BootstrapBtn from 'components/BootstrapBtn/BootstrapBtn';
import SignIn from 'components/SignIn/SignIn';

const NavigationBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <Navbar
      style={{ padding: '1em' }}
      className='class="p-3 mb-2 bg-white text-dark'
      sticky='top'
      expand='lg'
      collapseOnSelect
    >
      <Navbar.Brand>
        <img src={logo} width='50px' height='50px' /> Experiences
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        {isLoggedIn ? (
          <Nav style={{ textAlign: 'right' }} className='ms-auto'>
            <Nav.Link href='/'>
              <span style={{ paddingRight: '10px' }}>Home</span>
              <Icon.House style={{ color: 'green' }} />
            </Nav.Link>
            <Nav.Link href='#my-page'>
              <span style={{ paddingRight: '10px' }}>My Page</span>
              <Icon.PersonCircle />
            </Nav.Link>
            <Nav.Link href='#friends'>
              <span style={{ paddingRight: '10px' }}>Friends</span>
              <Icon.People />
            </Nav.Link>
            <Nav.Link href='#support'>
              <span style={{ paddingRight: '10px' }}>Support</span>
              <Icon.QuestionCircle />
            </Nav.Link>
            <BootstrapBtn
              type='button'
              text='Logga ut'
              variant='danger'
              onClick={toggleLogin}
            />
          </Nav>
        ) : (
          <SignIn toggleLogin={toggleLogin} />
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
