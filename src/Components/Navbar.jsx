import React, { useState, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../public/logo.svg";
import underline from "../public/nav_underline.svg";
import "./Navbar.css";
import menu_open from '../public/menu_open.svg'
import menu_close from  '../public/menu_close.svg'
const Navbar = () => {
  const [menu, setMenu] = useState("home");
const menuRef=useRef(); 
const openMenu = () => {
  menuRef.current.style.right = "0";
};

const closeMenu = () => {
  menuRef.current.style.right = "-350px";
};
  const navItems = [
    { name: "home", label: "Home" },
    { name: "about", label: "About me" },
    { name: "services", label: "Services" },
    { name: "portifolio", label: "Portfolio" },
    { name: "contact", label: "Contact" },
  ];

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
<img src={menu_open} alt="" className="nav-mob-open" onClick={openMenu} />
      <ul className="nav-menu" ref={menuRef}>

        <img src={menu_close} alt="" className="nav-mob-close" onClick={closeMenu} />
        {navItems.map((item) => (
          <li key={item.name}>
            <AnchorLink
              className="anchor-link"
              href={`#${item.name}`}
              offset={50}
            >
              <p onClick={() => setMenu(item.name)}>{item.label}</p>
            </AnchorLink>
            {menu === item.name && <img src={underline} alt="underline" />}
          </li>
        ))}
      </ul>

      <AnchorLink className="nav-connect anchor-link" offset={50} href="#contact">
        Connect with me
      </AnchorLink>
    </div>
  );
};

export default Navbar;
