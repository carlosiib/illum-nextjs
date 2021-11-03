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
            <Link href="/">
              <a>Features</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <a>Pricing</a>
            </Link>
          </li>
          <li>

            <Link href="/">
              <a>Resource
                <span className={styles.downArrow}></span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About us</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>FREE TRIAL</a>
            </Link>
          </li>
        </ul>
      </div>

    </div >
  )
}

export default Navbar
