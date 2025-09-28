import React from 'react';

function Header() {
  return (
    <header 
      className="container"
      style={{
        padding: "18px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h1 
        className="heading"
        style={{ margin: 0, fontSize: 24 }}
      >
        Vintage Music Festival
      </h1>

      <nav>
        <a 
          href="#details"
          style={{ marginRight: 16 }}
        >
          Details
        </a>
        <a 
          href="#tickets"
          className="btn"
        >
          Get Tickets
        </a>
      </nav>
    </header>
  );
}

export default Header;
