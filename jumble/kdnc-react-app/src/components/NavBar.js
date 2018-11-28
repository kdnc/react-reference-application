import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <div>
    <div>
      <NavLink to="/" className={'navLink'} activeClassName={'activeNavLink'} exact>Home</NavLink>
      <NavLink to="/hello" className={'navLink'} activeClassName={'activeNavLink'}>Hello</NavLink>
      <NavLink to="/prompt" className={'navLink'} activeClassName={'activeNavLink'}>Prompt</NavLink>
    </div>
  </div>
);

export default NavBar;