import React from 'react';
import NavBarServer from "./NavBarServer";
import Head from "next/head";

const styles = {
  rightContentContainer: {
    marginLeft: '250px',
    width: '80%',
    display: 'block'
  }
};

const Layout = (props) => (
  <div>
    <Head>
      <meta charet="utf-8"/>
      <link rel="shortcut icon" href="favicon.ico"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
            crossrigin="anonymous"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <meta name="theme-color" content="#000000"/>
      <link rel="manifest" href="manifest.json"/>
      <title>React App</title>
    </Head>
    <NavBarServer/>
    <div style={styles.rightContentContainer}>
      {props.children}
    </div>
  </div>
);

export default Layout