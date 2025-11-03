import React from 'react';

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
    fontFamily: 'sans-serif',
  },
  mainHeading: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  section: {
    marginBottom: '25px',
  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '15px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '5px',
  },
  list: {
    listStyleType: 'disc',
    marginLeft: '20px',
  },
  listItem: {
    marginBottom: '10px',
  },
  bold: {
    fontWeight: 'bold',
  },
  declaration: {
    marginTop: '40px',
    borderTop: '1px solid #000',
    paddingTop: '20px',
  },
  signature: {
    marginTop: '30px',
  },
  dietitianInfo: {
    marginTop: '40px',
  }
};

const TermsAndConditions = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.mainHeading}>Client Agreement – Nutrition & Lifestyle Programs</h1>
      <p>This Client Agreement outlines the terms and conditions governing participation in any nutrition and lifestyle program offered by <span style={styles.bold}>Karpagam Ramesh (M.Sc. Clinical Nutrition)</span>, including but not limited to the One-Time Consultation, 1-Month Healthy Eating Program, and 100 Days wellness Program (“the Program").</p>
      <p>By enrolling in any of these programs, the client acknowledges and agrees to the following:</p>

      <div style={styles.section}>
        <h2 style={styles.heading}>1. Program Overview</h2>
        <p>Each Program is designed to provide personalized dietary guidance and lifestyle modification support under the supervision of a <span style={styles.bold}>Clinical Dietitian</span>.</p>
        <p>The focus is on developing sustainable eating habits, improving nutritional balance, and promoting long-term wellness — without crash diets, extreme restrictions, or shortcuts.</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>2. Assessment & Plan</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>All programs begin with an <span style={styles.bold}>initial nutritional assessment</span> conducted via Zoom, voice call, or in-person meeting.</li>
          <li style={styles.listItem}>Clients are required to share recent <span style={styles.bold}>medical reports, prescriptions, and relevant health details</span> before the assessment for accurate diet planning.</li>
          <li style={styles.listItem}>Based on the assessment, a <span style={styles.bold}>personalized meal plan</span> will be designed considering the client's health goals, dietary preferences, and lifestyle.</li>
          <li style={styles.listItem}>Meal plans may be revised periodically based on progress, feedback, or any change in medical condition.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>3. Payment Policy</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Full payment must be made <span style={styles.bold}>prior to the start</span> of the program.</li>
          <li style={styles.listItem}>Payments are accepted through <span style={styles.bold}>UPI transfer</span> (details will be shared privately).</li>
          <li style={styles.listItem}>All fees are <span style={styles.bold}>non-refundable and non-transferable</span>, as the plans are fully customized for each client.</li>
          <li style={styles.listItem}>In the unlikely event that the dietitian is unable to continue due to an emergency or unavoidable circumstance, the client will be offered:
            <ul style={{...styles.list, listStyleType: 'circle', marginTop: '10px'}}>
              <li>A <span style={styles.bold}>partial refund</span> for the remaining period, or</li>
              <li>The <span style={styles.bold}>option to resume</span> the program at a later date, once services resume — whichever the client prefers.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>4. Follow-Up & Communication</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>All communication and follow-ups will take place via <span style={styles.bold}>WhatsApp, email, or scheduled calls</span>.</li>
          <li style={styles.listItem}>Response time is generally within working hours (<span style={styles.bold}>10 AM – 7 PM, Monday to Saturday</span>).</li>
          <li style={styles.listItem}><span style={styles.bold}>Sundays and public holidays</span> are considered non-working days.</li>
          <li style={styles.listItem}>If the dietitian remains unavailable for more than <span style={styles.bold}>5 consecutive working days</span> without prior notice, the client's active program duration will be <span style={styles.bold}>extended</span> accordingly.</li>
          <li style={styles.listItem}>Clients are expected to share regular updates, including food logs, progress photos, and feedback for accurate monitoring.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>5. Client Responsibilities</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Clients are responsible for <span style={styles.bold}>following the prescribed meal plan and lifestyle recommendations consistently</span>.</li>
          <li style={styles.listItem}>Any medical changes, new medications, or discomfort must be <span style={styles.bold}>reported to the dietitian immediately</span>.</li>
          <li style={styles.listItem}>Program success depends on the client's <span style={styles.bold}>commitment, consistency, and adherence</span> to the plan.</li>
          <li style={styles.listItem}>Meal plans are personalized and must <span style={styles.bold}>not be shared, copied, or reused</span> by others.</li>
          <li style={styles.listItem}>The dietitian will not be liable for unsatisfactory results if the plan is not followed as advised or if the client provides incomplete/incorrect information.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>6. Program Duration, Pause & Extension</h2>
        <ul style={styles.list}>
            <li style={styles.listItem}>The program duration begins from the date the client starts sending daily food logs or updates (“Day 1”).</li>
            <li style={styles.listItem}>Clients may take up to 5 days after receiving their meal plan to prepare mentally, shop for groceries, and start the program.</li>
            <li style={styles.listItem}>In case of medical or personal reasons, clients may pause the program <span style={styles.bold}>once with prior notice</span>, and resume within a mutually agreed time frame.</li>
            <li style={styles.listItem}>If the program is paused beyond the agreed period, reactivation may require an <span style={styles.bold}>additional administrative charge</span>.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>7. Confidentiality</h2>
        <p>All personal, medical, and contact information shared by the client will be treated as <span style={styles.bold}>strictly confidential</span> and used solely for nutrition planning, progress monitoring, and communication purposes. No data will be shared with third parties without explicit consent.</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>8. Media & Testimonials</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Transformation photographs, progress screenshots, or feedback messages may be used by the dietitian for educational or promotional purposes (e.g., social media, website, or workshops).</li>
          <li style={styles.listItem}>Client identity will remain anonymous unless the client provides explicit permission to disclose their name or image.</li>
          <li style={styles.listItem}>Content will only be shared after obtaining written or verbal consent.</li>
          <li style={styles.listItem}>Clients may decline participation in promotional materials at any time without affecting their enrollment in the program.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>9. Disclaimer</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>All nutrition plans and guidance provided are for <span style={styles.bold}>educational and lifestyle improvement purposes</span>.</li>
          <li style={styles.listItem}>The Program is <span style={styles.bold}>not a substitute for medical treatment or diagnosis</span>. Clients under medical supervision should consult their physician before making dietary changes.</li>
          <li style={styles.listItem}>Results vary depending on individual factors such as age, metabolism, medical conditions, and consistency.</li>
          <li style={styles.listItem}>The dietitian does not promote crash diets, detox cleanses, or supplement-based shortcuts for weight loss.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>10. Limitation of Liability</h2>
        <p>The dietitian shall not be held responsible for:</p>
        <ul style={styles.list}>
            <li style={styles.listItem}>Any adverse health effects resulting from non-compliance with the prescribed plan.</li>
            <li style={styles.listItem}>Results that differ from expectations due to genetic, medical, or environmental factors beyond professional control.</li>
            <li style={styles.listItem}>Any loss, injury, or damage arising from the client's failure to disclose medical conditions or medications during assessment.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>11. Governing Law</h2>
        <p>This Agreement shall be governed by and construed in accordance with the laws of India, and any disputes shall fall under the jurisdiction of Tamil Nadu courts.</p>
      </div>
      
      <div style={{...styles.section, ...styles.declaration}}>
        <h2 style={styles.heading}>Acknowledgement</h2>
        <p>
          By enrolling in any program, you acknowledge that you have read, understood, and agree to abide by the terms of this Client Agreement.
        </p>
        <div style={styles.signature}>
          <p>Client Name: __________________________</p>
          <p>Signature: __________________________</p>
          <p>Date: __________________________</p>
        </div>
      </div>

      <div style={styles.dietitianInfo}>
        <p><span style={styles.bold}>Dietitian:</span> Karpagam Ramesh, M.Sc. Clinical Nutrition</p>
        <p><span style={styles.bold}>Contact:</span> [e-mail: karpagamdietitian@gmail.com, Ph: 9003143389]</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;