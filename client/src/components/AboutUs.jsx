import React, { useState, useEffect } from 'react';

// 1. IMPORT YOUR IMAGE
// Make sure this path is correct for your project structure.
import profileImage from '../img/image2.png';

// --- TEXT CONTENT ---
const shortBio = `
  I’m Dietitian Karpagam, a practical and service-oriented nutrition professional with over 6 years of experience in clinical and lifestyle nutrition. After completing my M.Sc. in Clinical Nutrition and working at Apollo Hospitals, Chennai, I’ve helped hundreds of individuals transform their health through science-based, realistic diet plans.
`;

const longBio = `
  I’m Karpagam, Clinical dietitian—a practical, empathetic, and service-oriented nutrition professional with over 6 years of experience helping people achieve sustainable health transformations through the most powerful medicine—food.

  After completing my M.Sc. in Clinical Nutrition from Sri Ramachandra Institute of Higher Education and Research, I began my career at Apollo Hospitals, Greams Road, Chennai, where I gained rich hands-on experience managing diverse clinical and lifestyle cases.

  Over the years, I’ve helped individuals reclaim their health—from a 55-year-old prediabetic woman who has maintained normal A1c levels for over three years, to busy working professionals who achieved healthy weight loss without fad or restrictive diets.

  At Karps Wellness, I bring science-backed nutrition, practical meal planning, and lifestyle guidance together—to create customised diet programs that are easy to follow, enjoyable, and result-oriented.

  My approach is simple:
  ✨ No extremes. No deprivation.
  💡 Just conscious eating, consistent habits, and smart nutrition choices.

  Beyond consultations, I’ve also been part of several nutrition awareness programs, motivational talks, and health events, where I share one core message: wellness doesn’t begin in the lab or the gym—it begins on your plate.

  Whether it’s for weight loss, diabetes management, PCOS, chronic disease management or simply eating better—I’m here to help you make nutrition a part of your lifestyle, not a temporary fix.

  Because true wellness starts from within—and I’m here to guide you, one meal, one habit, and one conscious step at a time.
`;


// --- INLINE STYLES ---
const styles = {
  container: {
    maxWidth: '1100px',
    margin: '60px auto',
    padding: '50px 40px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    overflow: 'hidden',
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1a202c',
    position: 'relative',
    paddingBottom: '15px',
    display: 'inline-block',
  },
  titleUnderline: {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '4px',
    backgroundColor: '#4fd1c5',
    borderRadius: '2px',
  },
  mainContent: {
    display: 'flex',
    gap: '60px',
    alignItems: 'flex-start',
  },
  textColumn: {
    flex: '2',
  },
  textParagraph: {
    fontSize: '1.1rem',
    color: '#4a5568',
    lineHeight: '1.8',
    marginBottom: '1.5em',
  },
  imageColumn: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // --- Updated Image Styles ---
  imageContainer: {
    filter: 'drop-shadow(0 8px 20px rgba(0, 0, 0, 0.12))',
    maxWidth: '320px',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    // This creates the capsule/oval shape
    clipPath: 'inset(0% 0% 0% 0% round 160px)',
  },
  quote: {
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: '1.25rem',
    margin: '40px 0',
    color: '#1a202c',
    padding: '20px',
    borderLeft: '5px solid #4fd1c5',
    backgroundColor: '#f0fdfa',
    borderRadius: '0 8px 8px 0',
  },
  button: {
    padding: '14px 30px',
    backgroundColor: '#2d3748',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: 'bold',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    display: 'inline-block',
    marginTop: '15px',
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#1a202c',
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
  },
  // --- Main Page Responsive Styles ---
  mainContentMobile: {
    flexDirection: 'column-reverse',
    gap: '40px',
  },
  containerMobile: {
    margin: '20px',
    padding: '30px 20px',
  },
  titleMobile: {
     fontSize: '2rem',
  },
  // --- Modal Styles ---
  modalBackdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    maxWidth: '900px',
    width: '90%',
    maxHeight: '85vh',
    display: 'flex',
    gap: '40px',
    position: 'relative',
  },
  modalTextColumn: {
    flex: 2,
    overflowY: 'auto',
  },
  modalImageColumn: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#4a5568',
    zIndex: 10,
  },
  // --- Modal Responsive Styles ---
  modalContentMobile: {
    flexDirection: 'column',
    overflowY: 'auto', // The whole modal scrolls on mobile
    padding: '30px 25px',
  },
  modalTextColumnMobile: {
    overflowY: 'visible', // Disable scrolling on the text column itself
    order: 2, // Text comes after the image
  },
  modalImageColumnMobile: {
    order: 1, // Image comes first
    paddingBottom: '20px'
  },
};

// --- CSS for Invisible Scrollbar ---
// We inject a style tag because inline styles can't handle pseudo-selectors.
const InvisibleScrollbarStyle = () => (
  <style>{`
    .invisible-scrollbar::-webkit-scrollbar {
      display: none; /* For Chrome, Safari, and Opera */
    }
    .invisible-scrollbar {
      -ms-overflow-style: none;  /* For IE and Edge */
      scrollbar-width: none;  /* For Firefox */
    }
  `}</style>
);


// --- MODAL COMPONENT ---
const Modal = ({ isOpen, onClose, children, isMobile }) => {
  if (!isOpen) return null;
  
  // Combine base and mobile styles for the modal content area
  const dynamicModalContentStyle = {
    ...styles.modalContent,
    ...(isMobile ? styles.modalContentMobile : {})
  };

  return (
    <div style={styles.modalBackdrop} onClick={onClose}>
      <div 
        style={dynamicModalContentStyle} 
        onClick={(e) => e.stopPropagation()}
        className={isMobile ? 'invisible-scrollbar' : ''} // Apply class for scrolling on mobile
      >
        <button style={styles.closeButton} onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};


// --- MAIN COMPONENT ---
const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Combine styles for different states and screen sizes
  const combinedButtonStyle = { ...styles.button, ...(isHovered ? styles.buttonHover : {}) };
  const dynamicContainerStyle = { ...styles.container, ...(isMobile ? styles.containerMobile : {}) };
  const dynamicMainContentStyle = { ...styles.mainContent, ...(isMobile ? styles.mainContentMobile : {}) };
  const dynamicTitleStyle = { ...styles.title, ...(isMobile ? styles.titleMobile : {}) };
  const dynamicModalTextColumnStyle = { ...styles.modalTextColumn, ...(isMobile ? styles.modalTextColumnMobile : {}) };
  const dynamicModalImageColumnStyle = { ...styles.modalImageColumn, ...(isMobile ? styles.modalImageColumnMobile : {}) };


  const renderParagraphs = (text) => {
    return text.split('\n\n').map((paragraph, index) => (
      <p key={index} style={styles.textParagraph}>{paragraph.trim()}</p>
    ));
  };

  return (
    <>
      <InvisibleScrollbarStyle /> {/* Inject the CSS here */}
      <div style={dynamicContainerStyle}>
        <div style={styles.titleContainer}>
          <h1 style={dynamicTitleStyle}>
            About Dietitian Karpagam
            <div style={styles.titleUnderline}></div>
          </h1>
        </div>
        
        <div style={dynamicMainContentStyle}>
          <div style={styles.textColumn}>
            <p style={styles.textParagraph}>{shortBio.trim()}</p>
            
            <p style={styles.textParagraph}>
              If you’re ready to eat better, feel better, and live better —
            </p>

            <blockquote style={styles.quote}>
              "Wellness doesn’t begin in the lab or gym — it begins on your plate."
            </blockquote>
            
            <button
              style={combinedButtonStyle}
              onClick={openModal}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Know More About Me →
            </button>
          </div>

          <div style={styles.imageColumn}>
             {/* Use the new imageContainer for the shadow */}
            <div style={styles.imageContainer}>
              <img 
                src={profileImage} 
                alt="Dietitian Karpagam" 
                style={styles.image} 
              />
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} isMobile={isMobile}>
        <div 
            style={dynamicModalTextColumnStyle} 
            className={!isMobile ? 'invisible-scrollbar' : ''} // Apply class for scrolling on desktop
        >
          {renderParagraphs(longBio)}
        </div>
        <div style={dynamicModalImageColumnStyle}>
          {/* Also apply the new styles in the modal */}
          <div style={styles.imageContainer}>
            <img 
              src={profileImage} 
              alt="Dietitian Karpagam" 
              style={styles.image} 
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AboutUs;