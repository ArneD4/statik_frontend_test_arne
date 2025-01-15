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
    const navItems = t('navbar.topNav', { returnObjects: true });
    if (Array.isArray(navItems)) {
      console.log('navItems is an array:', navItems);
    } else {
      console.log('navItems is not an array');
    }

  };

  return (
    <nav className="navbar" ref={navbarRef}>

       <ul className="nav-items topNav">
        {/* // top navbar */}
        {t('navbar.topNav', { returnObjects: true }).map((item, index) => (
          console.log(item),
          <li key={index} className="nav-item">
        <button href={item.link}>{item.title}</button>
          </li>
        ))}
        </ul>
        <ul className="nav-items subNav">
        {/* // sub navbar */}
        {t('navbar.subNav', { returnObjects: true }).map((item, index) => (
          console.log(item),
          <li key={index} className="nav-item">
        <button href={item.link}>{item.title}</button>
          </li>
        ))}
        <li key={4} className="nav-item">
        <button className="secondary" href={""}>{t('navbar.cta')}</button>
          </li>
        </ul>
  

      <div id="mobileMenu" ref={mobileMenuRef}>
        <div id="lineContainer">
          <div className="line" id="line-1"></div>
          <div className="line" id="line-2"></div>
        </div>
      </div>
      <div className="language-switcher">
        <button className="" onClick={() => changeLanguage('nl')}>NL</button>
        <button className="secondary" onClick={() => changeLanguage('en')}>EN</button>
      </div>
    </nav>
  );
};

export default Navbar;
