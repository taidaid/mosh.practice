import React from "react";
import "./Navbar.css";
import "tachyons";

const Navbar = ({ totalCounters }) => {
  return (
    <div className="Navbar">
      <header
        className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l"
        style={{ bottom: "0" }}
      >
        <nav className="f6 fw6 ttu tracked">
          <p className="link dim white dib mr3" title="Home">
            Home
          </p>
          <p className="link dim white dib mr3" title="About">
            About
          </p>
          <p className="link dim white dib mr3" title="Store">
            Store
          </p>
          <p className="link dim white dib mr3" title="Contact">
            Contact
          </p>
          <p className="link dim white dib mr3" title="Count">
            Count
          </p>
          <p className="f6 br2 ph3 pv2 mb2 dib white bg-dark-gray">
            ({totalCounters})
          </p>
        </nav>
      </header>
    </div>
  );
};
// class Navbar extends Component {
//   state = {};
//   render() {
//     return (

//     );
//   }
// }

export default Navbar;
