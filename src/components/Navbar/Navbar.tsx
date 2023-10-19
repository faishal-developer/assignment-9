'use client'
import Link from 'next/link';
import { useState, useEffect, use } from 'react';
import styles from './Navbar.module.scss';
import { getUserInfo } from '@/services/auth.service';
import { loginPayload } from '@/types';
import { LoginOutlined, UserOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/redux/reduxHooks';
import { setData, setInfo } from '@/redux/slices/loginSlice';
import { authKey } from '@/constants/storageKey';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState('0');
  const userInfo = useAppSelector((state)=>state.loginReducer.data) 
  const dispatch = useAppDispatch();

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

  useEffect(()=>{
    dispatch(setInfo())
  },[])
 
  return (
    <div className={styles.container}>
        <nav className={`${styles.navbar} ${menuOpen ? styles.open : ''}`}>
          <div className={styles.logo}>
            <Link href="/">IT Doctor</Link>
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
            <li><Link href="/login" style={{ display: userInfo?.email ? 'none' : 'block' }}>
              Login
            </Link></li>
            <li><Link href="/profile" style={{ display: userInfo?.email ? 'block' : 'none' }}>
              Profile
            </Link></li>
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
                {userInfo?.email?(
                    <li>
                      <Link href="/profile">Profile</Link>
                    </li>
                  ):(
                    <li>
                      <Link href="/login">Login</Link>
                    </li>
                  )
                }
            </ul>
        </div>
    </div>
  );
};

export default Navbar;
