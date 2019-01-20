import React from 'react';
// import { NavLink } from "react-router-dom";
import Link from "next/link";

const styles = {
  nav: {
    listStyleType: 'none',
    marginLeft: '-30px'
  },

  leftNavContainer: {
    padding: '20px',
    position: 'absolute',
    width: '180px',
    backgroundColor: '#F15B2A',
    display: 'block',
    height: '100%'
  },

  navLink: {
    fontSize: '18px',
    listStyleType: 'none',
    color: '#ffffff'
  },

};

const NavBarServer = () => {

  const links = [
    {name: 'About', url: '/about'},
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
      <li key={index} style={styles.nav}>
        <Link href={link.url}><a style={styles.navLink}>{link.name}</a></Link>
      </li>
    );
  });

  return (
    <div style={styles.leftNavContainer}>
      <ul>
        <li style={styles.nav}><Link href='/'><a style={styles.navLink}>Home</a></Link></li>
        {linksComponents}
      </ul>
    </div>
  );
};

export default NavBarServer;