import React from 'react';
import {CurrentUserContainer} from "../../containers/messenger/currentUser/CurrentUserContainer";

const Messenger = () => {

  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Redux Messenger</a>
          </div>
        </div>
      </nav>
      <div className="row">
        <div className="col-xs-3">
          <div>
            <CurrentUserContainer/>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Messenger;