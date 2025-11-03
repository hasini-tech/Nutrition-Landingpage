import React from 'react';
import { FaUserMd, FaLeaf, FaDumbbell } from 'react-icons/fa';

// --- DATA FOR THE CLINIC ---
const pricingPlans = [
  {
    icon: <FaUserMd size={30} />,
    title: 'ONE-TIME NUTRITION CONSULTATION',
    subtitle: 'Perfect for those who need quick expert guidance.',
    price: '699',
    priceDetails: '/session',
    features: [
      '30-40 min consultation (Zoom / voice call / in-person)',
      'Nutritional assessment & goal setting',
      'General diet advice tailored to your lifestyle',
      'One follow-up message for clarification (within 7 days)',
      'Guidance on next steps if you plan to enrol later',
    ],
    idealFor: 'First-time clients seeking professional direction before starting a plan.',
    buttonText: 'BOOK CONSULTATION',
  },
  {
    icon: <FaLeaf size={30} />,
    title: '1-MONTH HEALTHY EATING PROGRAM',
    subtitle: 'Focus on building sustainable healthy eating habits.',
    price: '3999',
    priceDetails: '/30 days',
    features: [
      'Nutritional assessment & goal setting',
      'Personalised diet chart (shared within 24 hrs post-assessment)',
      'Diet explanation call for you & a family member',
      'Weekly WhatsApp check-ins',
      'Recipes & easy meal swaps',
      'Minor modifications to plan during the month',
    ],
    idealFor: 'Those who want to understand their body, improve consistency, and eat mindfully before committing long-term.',
    buttonText: 'JOIN 1-MONTH PLAN',
  },
  {
    icon: <FaDumbbell size={30} />,
    title: '100 DAYS DIET PROGRAM',
    subtitle: 'Transform your eating habits and metabolism — the sustainable way.',
    price: '10999',
    priceDetails: '/100 days',
    features: [
      'In-depth nutritional assessment (Zoom / Call / In-person)',
      'Personalized 100-day diet plan',
      'Diet explanation call for you & a family member',
      'Recipes & easy meal swaps',
      'Daily WhatsApp follow-up & accountability',
      'Fortnightly progress reviews',
      'Plan adjustments for travel, illness, or lifestyle changes',
      'Ongoing motivation & expert monitoring',
      'Optional home workout guidance by a Certified Fitness Coach (available at extra cost based on the number of sessions opted)',
    ],
    idealFor: 'Clients looking for lasting results, hormonal balance, and consistent progress.',
    buttonText: 'JOIN 100 DAYS PROGRAM',
  },
];

// --- Main Pricing Component ---
const Pricing = () => {
  return (
    <section style={styles.pricingSection}>
      <div style={styles.container}>
        {pricingPlans.map((plan, index) => (
          <div 
            key={index} 
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
          >
            <div style={styles.iconContainer}>{plan.icon}</div>
            <h2 style={styles.title}>{plan.title}</h2>
            <p style={styles.subtitle}>{plan.subtitle}</p>

            <div style={styles.priceContainer}>
              {plan.originalPrice && (
                <span style={styles.originalPrice}>₹{plan.originalPrice}</span>
              )}
              {plan.discount && (
                <span style={styles.discountBadge}>{plan.discount}</span>
              )}
            </div>

            <p style={styles.price}>
              <span style={styles.currency}>₹</span>
              {plan.price}
              <span style={styles.priceDetails}>{plan.priceDetails}</span>
            </p>

            <h3 style={styles.whatsIncluded}>WHAT'S INCLUDED:</h3>
            <ul style={styles.featuresList}>
              {plan.features.map((feature, i) => (
                <li key={i} style={styles.featureItem}>
                  <span style={styles.checkmark}>✅</span> {feature}
                </li>
              ))}
            </ul>

            <h3 style={styles.idealForTitle}>🔸 Ideal for:</h3>
            <p style={styles.idealForText}>{plan.idealFor}</p>

            <button 
              style={styles.button}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#228b22';
                e.target.style.borderColor = '#228b22';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#28a745';
                e.target.style.borderColor = '#28a745';
              }}
            >
              {plan.buttonText} →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- UPDATED STYLES ---
const styles = {
  pricingSection: {
    backgroundColor: '#F0FFF0',
    padding: '80px 24px',
    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    gap: '30px',
    flexWrap: 'nowrap',
    width: '100%',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: '40px 35px',
    borderRadius: '20px',
    border: '1px solid #e8f5e8',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    transition: 'all 0.3s ease-in-out',
    color: '#2d3748',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    flex: '1',
    minHeight: '750px',
    position: 'relative',
  },
  iconContainer: {
    backgroundColor: '#e8f5e8',
    width: '70px',
    height: '70px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    color: '#28a745',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: '700',
    margin: '0 0 12px 0',
    color: '#2d3748',
    lineHeight: '1.3',
    minHeight: '68px',
    display: 'flex',
    alignItems: 'center',
  },
  subtitle: {
    color: '#718096',
    marginBottom: '24px',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    minHeight: '45px',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    height: '28px',
    marginBottom: '5px',
  },
  originalPrice: {
    fontSize: '1.2rem',
    color: '#a0aec0',
    textDecoration: 'line-through',
    fontWeight: '500',
  },
  discountBadge: {
    backgroundColor: '#28a745',
    color: '#ffffff',
    padding: '6px 12px',
    borderRadius: '8px',
    fontSize: '0.85rem',
    fontWeight: 'bold',
  },
  price: {
    fontSize: '3.5rem',
    fontWeight: '800',
    margin: '8px 0 20px 0',
    color: '#2d3748',
    display: 'flex',
    alignItems: 'baseline',
  },
  currency: {
    fontSize: '2rem',
    color: '#28a745',
    marginRight: '4px',
    fontWeight: '600',
  },
  priceDetails: {
    fontSize: '1rem',
    fontWeight: 'normal',
    color: '#718096',
    marginLeft: '8px',
  },
  whatsIncluded: {
    color: '#28a745',
    fontSize: '0.9rem',
    fontWeight: '700',
    margin: '24px 0 16px 0',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  featuresList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    flexGrow: 1,
    marginBottom: '20px',
  },
  featureItem: {
    marginBottom: '14px',
    display: 'flex',
    alignItems: 'flex-start',
    color: '#4a5568',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },
  checkmark: {
    color: '#28a745',
    marginRight: '12px',
    fontWeight: 'bold',
    fontSize: '1.1em',
    flexShrink: 0,
    marginTop: '2px',
  },
  idealForTitle: {
    color: '#28a745',
    fontSize: '0.9rem',
    fontWeight: '700',
    margin: '20px 0 8px 0',
    letterSpacing: '0.5px',
  },
  idealForText: {
    color: '#4a5568',
    fontSize: '0.9rem',
    lineHeight: '1.5',
    marginBottom: '32px',
  },
  button: {
    backgroundColor: '#28a745',
    color: '#ffffff',
    border: '2px solid #28a745',
    borderRadius: '12px',
    padding: '18px 24px',
    fontSize: '1.05rem',
    fontWeight: '700',
    cursor: 'pointer',
    marginTop: 'auto',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    width: '100%',
  },
};

// Responsive media queries
const responsiveStyles = `
  @media (max-width: 1200px) {
    .pricing-container {
      max-width: 100%;
      padding: 0 20px;
      gap: 25px;
    }
    .pricing-card {
      padding: 35px 25px;
      min-height: 720px;
    }
  }
  
  @media (max-width: 1024px) {
    .pricing-container {
      flex-wrap: wrap;
      justify-content: center;
    }
    .pricing-card {
      flex: 0 1 calc(50% - 20px);
      min-height: 700px;
    }
  }
  
  @media (max-width: 768px) {
    .pricing-container {
      flex-direction: column;
      align-items: center;
    }
    .pricing-card {
      flex: 0 1 100%;
      max-width: 450px;
      min-height: auto;
    }
  }
  
  @media (max-width: 480px) {
    .pricing-section {
      padding: 40px 15px;
    }
    .pricing-card {
      padding: 25px 20px;
    }
  }
`;

// Add responsive styles to document head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = responsiveStyles;
  document.head.appendChild(styleElement);
}

export default Pricing;