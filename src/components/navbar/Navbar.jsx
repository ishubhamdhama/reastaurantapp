import React, { useState, useEffect } from 'react';
import Logo from '../../images/Abstract_Chef_Cooking_Restaurant_Free_Logo-removebg-preview.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import TableBooking from '@/pages/TableBooking';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  useEffect(() => {
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    const toggle = document.getElementById('nav-toggle');
    toggle.addEventListener('click', toggleMenu);

    window.addEventListener('scroll', handleScroll);

    return () => {
      toggle.removeEventListener('click', toggleMenu);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showMenu]);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <nav className="nav container">
        <div className="nav__data">
          <a href="#" className="nav__logo">
            <img src={Logo} alt="" className="h-32" /> FlavourFusion Cafe
          </a>

          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-menu-line nav__burger"></i>
            <i className="ri-close-line nav__close"></i>
          </div>
        </div>

        <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li>
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>

            <li>
              <Link to="/menu" className="nav__link">
                Menu
              </Link>
            </li>

            <li>
              <Link to="/gallery" className="nav__link">
                Gallery
              </Link>
            </li>

            <li>
              <Link to="/blog" className="nav__link">
                Blogs
              </Link>
            </li>

            <li>
              <Link to="/about" className="nav__link">
                About
              </Link>
            </li>

            <button className="reservation_button" onClick={toggleSidebar}>
              Book Table
              <div className="button__horizontal"></div>
              <div className="button__vertical"></div>
            </button>

          </ul>
        </div>
      </nav>

      {showSidebar && (
        <div className="sidebar">
          <div className='p-4'>
            <div className='text-right mb-5'>
              <button onClick={toggleSidebar}>
                <i className="ri-close-line" style={{ fontSize: "2.2rem" }}></i>
              </button>
              <hr className='border-black' />
            </div>
            <TableBooking closeSidebar={closeSidebar} /> {/* Pass closeSidebar as a prop */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
