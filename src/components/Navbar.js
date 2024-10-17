// src/Navbar.js
import React from 'react';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav style={isDarkMode ? styles.darkNav : styles.lightNav}>
      <ul style={styles.navList}>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button onClick={toggleTheme} style={styles.button}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

const styles = {
  lightNav: {
    background: '#f0f0f0',
    color: '#000',
  },
  darkNav: {
    background: '#333',
    color: '#fff',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  },
  button: {
    marginLeft: 'auto',
    padding: '5px 10px',
  },
};

export default Navbar;