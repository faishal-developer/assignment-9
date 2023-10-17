// components/ContactPage.js
import React from 'react';
import styles from './contactpage.module.scss';

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <h1 className={styles.title}>Contact Us</h1>
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <h2 className={styles.contactItemTitle}>Email</h2>
          <ul className={styles.contactItemInfo}>
            <li><a href="mailto:info@example.com" className={styles.contactItemLink}>info@example.com</a></li>
            <li><a href="mailto:support@example.com" className={styles.contactItemLink}>support@example.com</a></li>
            <li><a href="mailto:sales@example.com" className={styles.contactItemLink}>sales@example.com</a></li>
          </ul>
        </div>
        <div className={styles.contactItem}>
          <h2 className={styles.contactItemTitle}>Phone</h2>
          <ul className={styles.contactItemInfo}>
            <li className={styles.contactItemPhone}>+1-123-456-7890</li>
            <li className={styles.contactItemPhone}>+1-987-654-3210</li>
            <li className={styles.contactItemPhone}>+1-555-555-5555</li>
          </ul>
        </div>
        <div className={styles.contactItem}>
          <h2 className={styles.contactItemTitle}>LinkedIn</h2>
          <a href="https://www.linkedin.com/in/yourprofile" className={styles.contactItemLink} target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
