import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SidebarData } from './SidebarData';

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import * as Icon from 'react-bootstrap-icons';

import './NavigationBar.css';

import logo from '../../images/logo-img.jpg';

const NavigationBar = () => {
  return (
    <Navbar
      style={{ padding: '1em' }}
      className='class="p-3 mb-2 bg-white text-dark'
      sticky='top'
      expand='m'
      collapseOnSelect
    >
      <Navbar.Brand>
        <img src={logo} width='50px' height='50px' /> Experiences
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav style={{ textAlign: 'right' }}>
          <Nav.Link href='/'>
            <Icon.House style={{ color: 'green' }} />
            Home
          </Nav.Link>
          <Nav.Link href='#my-page'>
            <Icon.PersonCircle />
            My Page
          </Nav.Link>
          <Nav.Link href='#friends'>
            <Icon.People /> Friends
          </Nav.Link>
          <Nav.Link href='#support'>
            <Icon.QuestionCircle /> Support
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
