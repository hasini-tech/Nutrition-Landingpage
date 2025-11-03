// src/components/EnquiryForm.js

import React, { useState } from 'react'; // <-- Make sure these are imported
import axios from 'axios';

// --- STYLES ---
const styles = {
  section: {
    padding: '48px 24px',
    backgroundColor: '#f7fafc',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  h2: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: '8px',
    textAlign: 'center',
  },
  p: {
    color: '#4a5568',
    marginBottom: '24px',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    maxWidth: '800px',
    backgroundColor: '#ffffff',
    padding: '32px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  },
  formGroup: {
    marginBottom: '24px',
  },
  label: {
    display: 'block',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: '8px',
  },
  subLabel: {
    fontSize: '0.9rem',
    color: '#718096',
    fontWeight: 'normal',
    display: 'block',
    marginTop: '-4px',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '1rem',
    border: '1px solid #cbd5e0',
    borderRadius: '6px',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  },
  radioGroup: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '1rem',
    color: '#4a5568',
    cursor: 'pointer',
  },
  checkboxGroup: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '1rem',
    color: '#4a5568',
    cursor: 'pointer',
  },
  button: {
    width: '100%',
    backgroundColor: '#00796b',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    padding: '14px 24px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  hr: {
    border: 'none',
    borderTop: '1px solid #e2e8f0',
    margin: '32px 0',
  },
};

const EnquiryForm = () => {
  // --- STATE MANAGEMENT ---
  const [formData, setFormData] = useState({
    enquiringFor: '',
    relation: '',
    fullName: '',
    age: '',
    gender: '',
    contactNumber: '',
    email: '',
    location: '',
    occupation: '',
    goals: {
      weightLoss: false,
      weightGain: false,
      pcos: false,
      diabetes: false,
      thyroid: false,
      cholesterol: false,
      hypertension: false,
      pregnancy: false,
      childNutrition: false,
      generalWellness: false,
    },
    otherGoal: '',
    height: '',
    currentWeight: '',
    waistCircumference: '',
    hipCircumference: '',
    medicalConditions: '',
    consultationMode: '',
    howDidYouHear: '',
  });

  // --- HANDLERS ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      goals: { ...formData.goals, [name]: checked },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const selectedGoals = Object.keys(formData.goals)
        .filter((key) => formData.goals[key])
        .map(key => key.replace(/([A-Z])/g, ' $1').trim());

      const finalGoals = formData.otherGoal
        ? [...selectedGoals, formData.otherGoal]
        : selectedGoals;

      const submissionData = { ...formData, goals: finalGoals };

      await axios.post("http://localhost:5000/api/enquiries", submissionData);

      alert("Your enquiry has been submitted successfully! We will get back to you shortly.");
    } catch (err) {
      console.error(err);
      alert("Failed to submit your enquiry. Please try again later.");
    }
  };

  // --- DATA ---
  const nutritionGoals = [
    { key: 'weightLoss', label: 'Weight loss' },
    { key: 'weightGain', label: 'Weight gain' },
    { key: 'pcos', label: 'PCOS / PCOD management' },
    { key: 'diabetes', label: 'Diabetes / Blood sugar control' },
    { key: 'thyroid', label: 'Thyroid management' },
    { key: 'cholesterol', label: 'Cholesterol / Lipid management' },
    { key: 'hypertension', label: 'Hypertension / BP management' },
    { key: 'pregnancy', label: 'Pre-conception / Pregnancy nutrition' },
    { key: 'childNutrition', label: 'Child nutrition' },
    { key: 'generalWellness', label: 'General wellness / Healthy eating' },
  ];

  const referralOptions = [
    "Google",
    "Instagram",
    "Facebook",
    "Referral",
    "Doctor",
    "Other",
  ];

  // --- JSX RENDER ---
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.h2}>🍎 Client Enquiry Form</h2>
        <p style={styles.p}>Please fill in the details below to help us understand your health goals.</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Section 1: Basic Info */}
          <div style={styles.formGroup}>
            <label style={styles.label}>1. Are you enquiring for:</label>
            <div style={styles.radioGroup}>
              <label style={styles.radioLabel}><input type="radio" name="enquiringFor" value="Yourself" onChange={handleChange} required /> Yourself</label>
              <label style={styles.radioLabel}><input type="radio" name="enquiringFor" value="Someone else" onChange={handleChange} /> Someone else</label>
            </div>
          </div>

          {formData.enquiringFor === 'Someone else' && (
            <div style={styles.formGroup}>
              <label htmlFor="relation" style={styles.label}>2. Please specify your relation:</label>
              <input type="text" name="relation" id="relation" style={styles.input} value={formData.relation} onChange={handleChange} placeholder="e.g., spouse, parent, friend" />
            </div>
          )}

          <hr style={styles.hr} />

          {/* Section 2: Personal Details */}
          <div style={styles.formGroup}>
            <label htmlFor="fullName" style={styles.label}>3. Full Name:</label>
            <input type="text" name="fullName" id="fullName" style={styles.input} value={formData.fullName} onChange={handleChange} required />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="age" style={styles.label}>4. Age:</label>
            <input type="number" name="age" id="age" style={styles.input} value={formData.age} onChange={handleChange} required />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>5. Gender:</label>
            <div style={styles.radioGroup}>
              <label style={styles.radioLabel}><input type="radio" name="gender" value="Female" onChange={handleChange} required /> Female</label>
              <label style={styles.radioLabel}><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
              <label style={styles.radioLabel}><input type="radio" name="gender" value="Other" onChange={handleChange} /> Other</label>
            </div>
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="contactNumber" style={styles.label}>6. Contact Number:</label>
            <span style={styles.subLabel}>WhatsApp number preferred</span>
            <input type="tel" name="contactNumber" id="contactNumber" style={styles.input} value={formData.contactNumber} onChange={handleChange} required />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>7. Email Address: (Optional)</label>
            <input type="email" name="email" id="email" style={styles.input} value={formData.email} onChange={handleChange} />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="location" style={styles.label}>8. City / Location:</label>
            <input type="text" name="location" id="location" style={styles.input} value={formData.location} onChange={handleChange} required />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="occupation" style={styles.label}>9. Occupation:</label>
            <input type="text" name="occupation" id="occupation" style={styles.input} value={formData.occupation} onChange={handleChange} placeholder="e.g., IT professional, teacher, student" required />
          </div>

          <hr style={styles.hr} />

          {/* Section 3: Health Goals */}
          <div style={styles.formGroup}>
            <label style={styles.label}>10. Nutrition Concern / Goal:</label>
            <span style={styles.subLabel}>Select one or more</span>
            <div style={styles.checkboxGroup}>
              {nutritionGoals.map(goal => (
                <label key={goal.key} style={styles.checkboxLabel}>
                  <input type="checkbox" name={goal.key} checked={formData.goals[goal.key]} onChange={handleCheckboxChange} />
                  {goal.label}
                </label>
              ))}
            </div>
            <input type="text" name="otherGoal" style={{...styles.input, marginTop: '12px'}} value={formData.otherGoal} onChange={handleChange} placeholder="Others (please specify)" />
          </div>

          <hr style={styles.hr} />

          {/* Section 4: Health Metrics */}
          <div style={styles.formGroup}>
            <label htmlFor="height" style={styles.label}>11. Height (in cm):</label>
            <input type="number" name="height" id="height" style={styles.input} value={formData.height} onChange={handleChange} required />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="currentWeight" style={styles.label}>12. Current Weight (in kg):</label>
            <input type="number" name="currentWeight" id="currentWeight" step="0.1" style={styles.input} value={formData.currentWeight} onChange={handleChange} required />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="waistCircumference" style={styles.label}>13. Waist Circumference (in cm): (Optional)</label>
            <input type="number" name="waistCircumference" id="waistCircumference" style={styles.input} value={formData.waistCircumference} onChange={handleChange} />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="hipCircumference" style={styles.label}>14. Hip Circumference (in cm): (Optional)</label>
            <input type="number" name="hipCircumference" id="hipCircumference" style={styles.input} value={formData.hipCircumference} onChange={handleChange} />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="medicalConditions" style={styles.label}>15. Any known medical conditions or medications? (Optional)</label>
            <textarea name="medicalConditions" id="medicalConditions" rows="4" style={{...styles.input, height: 'auto'}} value={formData.medicalConditions} onChange={handleChange}></textarea>
          </div>

          <hr style={styles.hr} />

          {/* Section 5: Consultation Details */}
          <div style={styles.formGroup}>
            <label style={styles.label}>16. Preferred consultation mode:</label>
            <div style={styles.radioGroup}>
              <label style={styles.radioLabel}><input type="radio" name="consultationMode" value="Online" onChange={handleChange} required /> Online (Zoom / WhatsApp)</label>
              <label style={styles.radioLabel}><input type="radio" name="consultationMode" value="In-person" onChange={handleChange} /> In-person (at clinic)</label>
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>17. How did you hear about us?</label>
            <div style={styles.radioGroup}>
              {referralOptions.map(option => (
                <label key={option} style={styles.radioLabel}>
                  <input
                    type="radio"
                    name="howDidYouHear"
                    value={option}
                    checked={formData.howDidYouHear === option}
                    onChange={handleChange}
                    required
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <button type="submit" style={styles.button}>Submit Enquiry</button>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;