import React from 'react';
 
const Footer = () => {
    let date = new Date();
  return (
    <footer className="footer-container">
      <p>&copy; {date.getFullYear()} Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
