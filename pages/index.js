

import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import Component from '../components/component';

const Index = (props) => {
  return (
    <div>
      <Navbar bg="5a23c8" variant="dark">
        <Navbar.Brand href="#home">Test Landing</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#tests">Tests</Nav.Link>
          <Nav.Link href="#start">Start</Nav.Link>
        </Nav>
      </Navbar>
      <div style={{backgroundColor: '#333333', color: '#ffffff'}}>
        <h1 style={{textAlign: 'center'}}>Test Landing</h1>
        <Component/>
      </div>
    </div>
  )
}

export default Index;