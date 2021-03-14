'use strick';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-1 plr1">
        <NavLink to="/" className="brand-logo">
          React + TypeScript
        </NavLink>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Список </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
