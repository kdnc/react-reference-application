import React from 'react';
import NavBarServer from "./NavBarServer";

const styles = {
  rightContentContainer: {
    marginLeft: '250px',
    width: '80%',
    display: 'block'
  }
};

const Layout = (props) => (
  <div>
    <NavBarServer/>
    <div style={styles.rightContentContainer}>
      {props.children}
    </div>
  </div>
);

export default Layout