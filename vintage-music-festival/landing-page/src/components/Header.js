import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="container site-header">
      <h1 className="heading site-title">
        Vintage Music Festival
      </h1>

      <nav className="site-nav" aria-label="primary">
        <a href="#details">Details</a>
        <a href="/tickets" className="btn">Get Tickets</a>
      </nav>
    </header>
  );
}

export default Header;
