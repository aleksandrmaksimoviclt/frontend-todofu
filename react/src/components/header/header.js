import React from 'react';

import './header.css'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <a className="header-logo" href="/" aria-label="Todofu Home">
          <span className="header-logo-default"></span>
        </a>
      </div>
    );
  }
}

export default Header;
