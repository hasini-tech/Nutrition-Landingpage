import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  header: {
    backgroundColor: '#F0FFF0',
    color: '#e2e8f0',
    // --- CHANGE HERE: Reduced top and bottom padding ---
    padding: '12px 40px', 
    borderBottom: '1px solid #2d3748',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    transition: 'background-color 0.3s ease-in-out',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    // --- CHANGE HERE: Slightly smaller font size ---
    fontSize: '2.0rem', 
    fontWeight: '700',
    margin: 0,
    color: '#a7ffeb',
  },
  subtitle: {
    // --- CHANGE HERE: Slightly smaller font size ---
    fontSize: '1.0rem', 
    marginTop: '2px',
    fontStyle: 'italic',
    color: '#a0ae0',
  },
  nav: {
    display: 'flex',
    gap: '30px',
  },
  navLink: {
    color: '#000000',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    position: 'relative',
    transition: 'color 0.3s ease',
  },
  navLinkHover: {
    color: '#000000',
  },
  navLinkUnderline: {
    position: 'absolute',
    bottom: '-5px',
    left: 0,
    right: 0,
    height: '2px',
    backgroundColor: '#a7ffeb',
    transform: 'scaleX(0)',
    transition: 'transform 0.3s ease-in-out',
  },
};


const Header = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (linkName) => {
    setHoveredLink(linkName);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'About Us', path: '/about' },
    { text: 'Services', path: '/#services' },
    { text: 'Contact Us', path: '/#contact' },
    { text: 'Enquiry Form', path: '/enquiry' },
  ];

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.titleContainer}>
          <h1 style={styles.title}>Karpagam Clinic</h1>
          <p style={styles.subtitle}>Your Health, Our Priority</p>
        </div>
        <nav style={styles.nav}>
          {navLinks.map(({ text, path }) => (
            <Link
              key={text}
              to={path}
              style={{
                ...styles.navLink,
                ...(hoveredLink === text ? styles.navLinkHover : {}),
              }}
              onMouseEnter={() => handleMouseEnter(text)}
              onMouseLeave={handleMouseLeave}
            >
              {text}
              <span
                style={{
                  ...styles.navLinkUnderline,
                  transform: hoveredLink === text ? 'scaleX(1)' : 'scaleX(0)',
                }}
              />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;