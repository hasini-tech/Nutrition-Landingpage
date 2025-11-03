import React from 'react';
// CORRECTED: Added 'import' keyword and fixed the relative path
import NaturalBackgroundImage from '../img/Natural.png';

const styles = {
  section: {
    padding: '64px 24px',
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    backgroundImage: `url(${NaturalBackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    zIndex: 1,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  h2: {
    fontSize: '2.5rem',
    fontWeight: 'normal',
    color: '#ffffff',
    marginBottom: '8px',
  },
  h3: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#a7ffeb',
    marginBottom: '24px',
  },
  textContent: {
    color: '#f0f0f0',
    fontSize: '1.2rem',
    lineHeight: '1.7',
    maxWidth: '800px',
  },
  button: {
    backgroundColor: '#00796b',
    color: '#ffffff',
    fontWeight: 'bold',
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '32px',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
};

const Hero = () => {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.overlay}></div>
      <div style={styles.container}>
        <h2 style={styles.h2}>Getting to Know</h2>
        <h3 style={styles.h3}>"Coimbatore Dietitian Pradeepa"</h3>
        <div style={styles.textContent}>
          <p>
            <strong>Pradeepa Saravanan</strong> is a Coimbatore-based consultant Dietitian/Nutritionist...
          </p>
          <p style={{ marginTop: '16px' }}>
            She says, "Diet is the cornerstone of health and vitality..."
          </p>
          <button
            style={styles.button}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#004d40'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#00796b'}
          >
            How do you feel being a dietitian?
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;