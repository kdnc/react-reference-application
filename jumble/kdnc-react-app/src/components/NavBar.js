import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {

  const links = [
    {name: 'Prompt', url: '/prompt'},
    {name: 'Color', url: '/color'},
    {name: 'Smart Color', url: '/color/Green/Green'},
    {name: 'Recursion', url: '/recursive-color/Top Parent/yellow'},
    {name: 'Logging', url: '/logging'},
    {name: 'People', url: '/people'},
    {name: 'Places', url: '/places'},
    {name: 'Protected', url: '/protected'},
    {name: '404 Error', url: '/404Error'},
    {name: 'Route Transitions', url: '/route-transitions'},
    {name: 'Redirect Route', url: '/redirect'},
    {name: 'Redux Messenger', url: '/redux-messenger'},
  ];

  let linksComponents = links.map((link, index) => {
    return (
      <li key={index} className='nav'>
        <NavLink className={'navLink'} activeClassName={'activeNavLink'}
                 to={link.url} exact>{link.name}</NavLink>
      </li>
    );
  });

  return (
    <div className={'leftNavContainer'}>
      <ul>
        <li className='nav'><NavLink className={'navLink'} activeClassName={'activeNavLink'} to='/' exact>Home</NavLink></li>
        {linksComponents}
      </ul>
    </div>
  );
};

export default NavBar;