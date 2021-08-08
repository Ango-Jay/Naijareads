import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const NavBar = () => {
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
