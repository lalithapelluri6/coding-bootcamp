import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/"
          activeClassName="active"
          className="nav-link"
          isActive={() => window.location.pathname === '/'}
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/about"
          activeClassName="active"
          className="nav-link"
          isActive={() => window.location.pathname === '/about'}
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/blog"
          activeClassName="active"
          className="nav-link"
          isActive={() => window.location.pathname === '/blog'}
        >
          Blog
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/contact"
          activeClassName="active"
          className="nav-link"
          isActive={() => window.location.pathname === '/contact'}
        >
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/contact/learn"
          activeClassName="active"
          className="nav-link"
          isActive={() => window.location.pathname === '/contact/learn'}
        >
          Learn
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;