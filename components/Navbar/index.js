import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { NavbarLogo } from '../Logos/index'

const Navbar = () => {
  // const [ofcanvasShow, setOffcanvasShow] = useState(false);
  // const onCanvasHandler = () => {
  //   setOffcanvasShow((prev) => !prev);
  // };
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".navbarContainer");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = ({ }) => {
    setScroll(window.scrollY);
  };

  return (
    <div className={`navbarContainer ${scroll > headerTop ? "is-sticky" : ""}`}>
      <div >
        <Link href="/">
          <a>
            <NavbarLogo width="198" height="80" />
          </a>
        </Link>
      </div>

      <div className="navbarList">
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
          <li className="sub-menu-container">
            <Link href="/" >
              <a>Resource
                <span className="downArrow"></span>
              </a>
            </Link>

            <ul className="sub-menu">
              <li className="sub-menu-item">
                <Link href="https://support.illumidesk.com/hc/en-us">
                  <a
                    className="sub-menu-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Illumidesk Support
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/about">
              <a>About us</a>
            </Link>
          </li>
          <motion.li
            whileHover={{
              scale: 1.04,
            }}
            className="navbarList-anchor">
            <Link href="https://app.illumidesk.com/login?utm_source=main&utm_medium=free-trial-navbar-button&utm_campaign=web" >
              <a target="_blank" rel="noreferrer" >
                FREE TRIAL
              </a>
            </Link>
          </motion.li>
        </ul>
      </div>

    </div >
  )
}

export default Navbar
