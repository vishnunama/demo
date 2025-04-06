import React, { useState, useContext } from 'react';
import carticon from "../Assets/icons/cart.svg";
import { ShopContext } from './ShopContext';
import { Link } from 'react-router-dom';
import logo from "../Assets/logo/logo.jpg";
import { FiChevronDown } from 'react-icons/fi';
import { FaSignOutAlt } from 'react-icons/fa';
import profile from "../Assets/logo/profile.png";
import "./Header.css";
import DropDown from './DropDown';
import { IoMenu } from 'react-icons/io5';

const Header = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const { getTotalCartITems } = useContext(ShopContext);
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  const getUserName = (email) => {
    return email.split('@')[0];
  };

  return (
    <>
      <header className="header">
        <div className="container container-full">
          <nav className="header-inner flx-between">
            <div>
              <button style={{ fontSize: "25px" }} className="btn-primary" onClick={toggleSidebar}>
                <IoMenu />
              </button>
              <DropDown isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            </div>

            {/* Logo Start */}
            <Link to='/'>
              <div className="logo">
                <a className="link white-version">
                  <img style={{ borderRadius: "20px" }} className='image-logo-in' src={logo} alt="Logo" />
                </a>
              </div>
            </Link>
            {/* Logo End */}

            {/* Menu Start */}
            <div className="header-menu d-lg-block d-none">
              <ul className="nav-menu flx-align">
                <li className="nav-menu__item has-submenu">
                  <span className="nav-menu__link">
                    <Link to="/">Home</Link>
                  </span>
                </li>
                <li className="nav-menu__item has-submenu">
                  <span className="nav-menu__link">
                    <Link to="/PrivacyPolicy">Privacy Policy</Link>
                  </span>
                </li>
                <li className="nav-menu__item has-submenu">
                  <span className="nav-menu__link">
                    <Link to="/RefundPolicy">Refund Policy</Link>
                  </span>
                </li>
                <li className="nav-menu__item has-submenu">
                  <span className="nav-menu__link">
 <Link to="/all_Product">
                        <a className="nav-submenu__link">All Products</a>
                      </Link>                  </span>
                
                </li>
              </ul>
            </div>
            {/* Menu End */}

            {/* Header Right Start */}
            <div className="header-right flx-align">
             

              {/* Cart Icon */}
              <Link to="/cart" className="header-right__button cart-btn position-relative">
                <img src={carticon} alt="Cart Icon" className="white-version" />
                <span className="qty-badge font-12">{getTotalCartITems()}</span>
              </Link>
            </div>
            {/* Header Right End */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
