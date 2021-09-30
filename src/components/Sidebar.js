import styles from './Sidebar.module.scss';
import { samantha } from './../assest/imga_url';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const sidebarNavLinks = [
  'dashboard',
  'expenses',
  'wallets',
  'summary',
  'accounts',
  'settings',
];
export default function Sidebar() {
  let location = useLocation();

  return (
    <>
      {/* html semantic element */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.profileDetails}>
            <div className={styles.profileImageDiv}>
              <img src={samantha} alt="" />
              <p className={styles.notification}>4</p>
            </div>
            <p className={styles.username}>samantha</p>
            <p className={styles.useremail}>email@gmail.com</p>
          </div>
          <nav className={styles.sidebarNav}>
            <ul>
              {sidebarNavLinks.map((sidebarNavLink) => (
                <li className={styles.sidebarNavItem} key={sidebarNavLink}>
                  <Link
                    className={
                      location.pathname === `/${sidebarNavLink}`
                        ? styles.sidebarNavLinkActive
                        : styles.sidebarNavLink
                    }
                    to={`/${sidebarNavLink}`}
                  >
                    {sidebarNavLink.charAt(0).toUpperCase() +
                      sidebarNavLink.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
