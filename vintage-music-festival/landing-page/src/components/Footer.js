import React from "react";

function Footer() {
  return (
    <footer style={{ 
        textAlign: "center", 
        padding: '40, 0', 
        fontSize: 14 }}>
        <p style={{ margin: 0 }}>
            &copy; {new Date().getFullYear()} Designed by Bowhle
        </p>
    </footer>
  );
}

export default Footer;
