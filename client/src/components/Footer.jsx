import React from 'react';
import { Link } from 'react-router-dom';
// Import the social media icons from the 'react-icons/fa' library
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// In-line CSS styles are defined in a JavaScript object for organization.
const styles = {
  footer: {
    backgroundColor: '#D0F0C0', // Very dark blue, almost black
    color: '#a0aec0',           // A light gray for text, providing good contrast
    padding: '30px',
    fontFamily: 'sans-serif',
    // --- Lines added to top and bottom of the entire footer ---
    borderTop: '1px solid #2d3748', 
    borderBottom: '1px solid #2d3748', 
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto', // Center the content within the footer
  },
  mainContent: {
    display: 'flex',
    justifyContent: 'space-between', // Pushes branding to the left and nav to the right
    alignItems: 'center', // Vertically align items in the middle
    flexWrap: 'wrap',     // Allows items to stack on smaller screens
    gap: '30px',
    paddingBottom: '30px', // Space between main content and the copyright line
  },
  branding: {
    textAlign: 'left',
  },
  clinicName: {
    color: '#ffffff', // White for the main heading to make it stand out
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '0 0 8px 0',
  },
  tagline: {
    color: '#a0aec0', // Same light gray as the default text
    fontSize: '1rem',
    margin: 0,
    fontStyle: 'italic',
  },
  socialsContainer: {
    marginTop: '20px',
    display: 'flex',
    gap: '15px', // Space between social media icons
  },
  nav: {
    display: 'flex',
    gap: '25px', // Space between navigation links
    flexWrap: 'wrap',
  },
  // --- Style for the copyright section at the bottom ---
  copyright: {
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#a0aec0',
    paddingTop: '30px',
    borderTop: '1px solid #2d3748', // A subtle separator line
  }
};

// CSS for dynamic hover effects is injected using a <style> tag.
// This is a common pattern for adding pseudo-classes like :hover in CSS-in-JS.
const dynamicStyles = `
  .footer-nav-link {
    color: #a0aec0;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease; /* Smooth color transition on hover */
  }

  .footer-nav-link:hover {
    color: #ffffff; /* Link becomes white on hover for emphasis */
  }

  .social-icon {
    background-color: #4a5568; /* Gray background for the icon circle */
    color: #e2e8f0; /* Light icon color */
    width: 40px;
    height: 40px;
    border-radius: 50%; /* Makes the container a perfect circle */
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transitions */
  }

  .social-icon:hover {
    background-color: #718096; /* Lighter gray on hover */
    transform: translateY(-3px); /* Gives a slight "lift" effect on hover */
  }
`;

// The main Footer component function
const Footer = () => {
  // Array of link objects for easy mapping and rendering.
  // 'isRouterLink' determines whether to use React Router's <Link> or a standard <a> tag.
  const footerLinks = [
    { text: 'Home', path: '/', isRouterLink: true },
    { text: 'About Us', path: '/about', isRouterLink: true },
    { text: 'Services', path: '/#services', isRouterLink: false },
    { text: 'Contact Us', path: '/#contact', isRouterLink: false },
    { text: 'Terms and Conditions', path: '/terms', isRouterLink: true },
  ];

  return (
    <>
      {/* The dynamic styles are injected into the document's head */}
      <style>{dynamicStyles}</style>

      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.mainContent}>
            {/* Left Column: Contains the clinic's name, tagline, and social media icons */}
            <div style={styles.branding}>
              <h2 style={styles.clinicName}>Karpagam Clinic</h2>
              <p style={styles.tagline}>Your Health, Our Priority</p>

              {/* Social Media Icons Section */}
              <div style={styles.socialsContainer}>
                <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              </div>
            </div>

            {/* Right Column: Contains the navigation links */}
            <nav style={styles.nav}>
              {footerLinks.map(({ text, path, isRouterLink }) => 
                isRouterLink ? (
                  // Use React Router <Link> for internal navigation to avoid page reloads
                  <Link key={text} to={path} className="footer-nav-link">{text}</Link>
                ) : (
                  // Use a standard <a> tag for external links or anchor links (#)
                  <a key={text} href={path} className="footer-nav-link">{text}</a>
                )
              )}
            </nav>
          </div>

          {/* Copyright Section at the bottom of the footer */}
          <div style={styles.copyright}>
            Copyright © 2025 Karpagam Clinic . All rights reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;