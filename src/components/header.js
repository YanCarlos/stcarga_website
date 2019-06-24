import React, { Component } from 'react';
import Styles from '../styles/header.module.scss';
import Logo from '../images/logo1.png'
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  NavbarBrand,
} from 'reactstrap'


class Header extends Component {
  
  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
      <div className={Styles.container}>
        <Navbar light className={Styles.navbar}  expand="md">
          <NavbarBrand href="/">
            <img className={Styles.logo} src={Logo} alt="Logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className={Styles.nav} navbar>
              <NavItem>
                <NavLink className={Styles.navLink} href='#'>INICIO</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={Styles.navLink} href='#'>NOSOTROS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={Styles.navLink} href='#'>SERVICIOS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={Styles.navLink} href='#'>CONTACTO</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
}


export default Header;
