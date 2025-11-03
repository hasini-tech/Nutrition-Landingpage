import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Pricing from './components/Pricing.jsx';
import Footer from './components/Footer.jsx';
import TermsAndConditions from './components/TermsAndConditions.jsx';
import EnquiryPage from './components/EnquiryPage.jsx';
import ContactSection from './components/ContactSection.jsx'; 
import AboutUs from './components/AboutUs.jsx'; // Corrected import path for consistency (.jsx)

// A component for your main page content
const HomePage = () => (
  <>
    <Hero />
    <Pricing />
    <ContactSection /> 
  </>
);

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            {/* Route for the main landing page */}
            <Route path="/" element={<HomePage />} />
            
            {/* Route for the Terms and Conditions page */}
            <Route path="/terms" element={<TermsAndConditions />} />
            
            {/* Route for the Enquiry page */}
            <Route path="/enquiry" element={<EnquiryPage />} />
            
            {/* Route for the About Us page -- THIS WAS THE MISSING LINE */}
            <Route path="/about" element={<AboutUs />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;