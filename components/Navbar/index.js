import React from 'react'
import Link from 'next/link'
import { NavbarLogo } from '../Logos/index'
import styles from '../../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div >
        <Link href="/">
          <a>
            <NavbarLogo width="198" height="80" />
          </a>
        </Link>
      </div>

      <div className={styles.navbarList}>
        <ul>
          <li>
            <Link href="/">Features</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>

            <Link href="/resources">
              <a>Resource
                <span className={styles.downArrow}></span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about-us">About us</Link>
          </li>
          <li>
            <Link href="/blog">FREE TRIAL</Link>
          </li>
        </ul>
      </div>

    </div >
  )
}

export default Navbar
