import React, { useEffect, useRef } from "react";
import "./styles/NavBar.scss";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);




  useEffect(() => {
    const mobileMenu = mobileMenuRef.current;
    const toggleActive = () => {
      ///give the active class to .navbar, #mobileMenu, #line - 1 and #line - 2
      navbarRef.current.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      document.getElementById("line-1").classList.toggle("active");
      document.getElementById("line-2").classList.toggle("active");
    };

    if (mobileMenu) {
      mobileMenu.addEventListener("click", toggleActive);
    }

    return () => {
      if (mobileMenu) {
        mobileMenu.removeEventListener("click", toggleActive);
      }
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar" ref={navbarRef}>

      <div id="mobileMenu" ref={mobileMenuRef}>
        <div id="lineContainer">
          <div className="line" id="line-1"></div>
          <div className="line" id="line-2"></div>
        </div>
      </div>
      <div className="language-switcher">
        <button onClick={() => changeLanguage('nl')}>NL</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
      </div>
    </nav>
  );
};

export default Navbar;
