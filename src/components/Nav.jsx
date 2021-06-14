import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="nav-color" expand="md">
        <NavbarBrand href="/" className="ml-5  nav-text-color">
          <span className="text-lighten text-enlarge">naija</span>
          <span className="text-bold text-enlarge">reads</span>
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default NavBar;
