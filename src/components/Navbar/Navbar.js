import React from "react";
import "./Navbar.css";
import "tachyons";

const Navbar = ({ totalCounters, showMenu, onRouteChange }) => {
  return (
    <div className="Navbar">
      <header className="bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
        <nav className="f6 fw6 ttu tracked">
          <p
            className="link dim white dib mr3"
            title="Home"
            onClick={() => onRouteChange("home")}
          >
            Home
          </p>
          <p
            className="link dim white dib mr3"
            title="About"
            onClick={() => onRouteChange("about")}
          >
            About
          </p>
          <p
            className="link dim white dib mr3"
            title="Store"
            onClick={() => onRouteChange("store")}
          >
            Store
          </p>
          <p
            className="link dim white dib mr3"
            title="Contact"
            onClick={() => onRouteChange("contact")}
          >
            Contact
          </p>
          <p
            className="link f6 br2 ph3 pv2 mb2 mr3 dim dib white bg-dark-gray "
            title="Shopping Cart"
            id="shoppingCart"
            onClick={showMenu}
          >
            Shopping Cart
          </p>
          <p
            className="f6 br2 ph3 pv2 mb2 dib white bg-dark-gray"
            onClick={showMenu}
          >
            ({totalCounters})
          </p>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
