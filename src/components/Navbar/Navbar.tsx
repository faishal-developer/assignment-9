'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState('0');

  useEffect(() => {
    if (menuOpen) {
      // If the menu is open, set the menuHeight to auto to display the full content
      setMenuHeight('auto');
    } else {
      // If the menu is closed, set the menuHeight to 0 to hide the content
      setMenuHeight('0');
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  console.log(styles);
  
  return (
    <div className={styles.container}>
        <nav className={`${styles.navbar} ${menuOpen ? styles.open : ''}`}>
          <div className={styles.logo}>
            <Link href="/">Laptop Service</Link>
          </div>
          <ul
            className={`${styles['nav-links']} ${menuOpen ? styles.open : ''}`}
            style={{ height: menuHeight }}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div
            className={`${styles.burger}`}
            onClick={toggleMenu}
          >
            <div className={styles.line1}> </div>
            <div className={styles.line2}> </div>
            <div className={styles.line3}> </div>
          </div>
        </nav>
        <div className={menuOpen?styles.menu_open:styles.d_none}>
            <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;
