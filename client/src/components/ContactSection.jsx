import React from 'react';
// Import icons for the contact cards
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

// --- STYLES ---
const styles = {
  contactSection: {
    backgroundColor: '#1a202c',
    padding: '80px 24px',
    fontFamily: 'sans-serif',
    color: '#e2e8f0',
    borderTop: '1px solid #2d3748',
    display: 'flex',
    justifyContent: 'center',
  },
  // Main container for the content
  container: {
    maxWidth: '1200px',
    width: '100%',
  },
  // Column for the info content
  infoColumn: {
    flex: 1,
    minWidth: '300px',
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '16px',
    lineHeight: '1.2',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#a0aec0',
    marginBottom: '48px',
  },
  // Container for the info cards
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  // Style for the clickable contact cards
  card: {
    backgroundColor: '#2d3748',
    border: '1px solid #4a5568',
    borderRadius: '12px',
    padding: '24px',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none', // Removes underline from the link
    color: 'inherit', // Inherits the color from parent
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
  },
  iconWrapper: {
    color: '#a7ffeb', // Mint-teal icon color
    marginRight: '20px',
    fontSize: '1.5rem',
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#ffffff',
    margin: '0 0 4px 0',
  },
  cardDetail: {
    fontSize: '1rem',
    color: '#a0aec0',
    margin: 0,
  },
};

// --- Contact Section Component ---
const ContactSection = () => {
  return (
    <section id="contact" style={styles.contactSection}>
      <div style={styles.container}>
        {/* Contact Info */}
        <div style={styles.infoColumn}>
          <h2 style={styles.title}>Let's Talk About Your Needs</h2>
          <p style={styles.subtitle}>
            Our team is ready to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <div style={styles.cardsContainer}>
            {/* Email Card */}
            <a href="mailto:your.email@example.com" style={styles.card}>
              <div style={styles.iconWrapper}><FaEnvelope /></div>
              <div>
                <h3 style={styles.cardTitle}>Email Us</h3>
                <p style={styles.cardDetail}>Karpagamdietitian@gmail.com</p>
              </div>
            </a>
            {/* Phone Card */}
            <a href="tel:+911234567890" style={styles.card}>
              <div style={styles.iconWrapper}><FaPhoneAlt /></div>
              <div>
                <h3 style={styles.cardTitle}>Call Us</h3>
                <p style={styles.cardDetail}>+91 90031 49989(9AM - 7PM IST)</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;