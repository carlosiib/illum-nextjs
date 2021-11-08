import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import MobileNavbar from '../MobileNavbar'
import { NavbarLogo } from '../Logos/index'

const Navbar = () => {
  const [ofcanvasShow, setOffcanvasShow] = useState(false);
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

  const onCanvasHandler = () => {
    setOffcanvasShow((prev) => !prev);
  };

  const handleScroll = ({ }) => {
    setScroll(window.scrollY);
  };

  function handleFeatureScroll() {
    const featuresEl = document.getElementById("illumidesk-features")
    let offset = 100;
    if (!featuresEl) return

    window.scrollTo({
      behavior: "smooth",
      top:
        featuresEl.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top - offset
    });
  }

  return (
    <>
      <div className={`navbarContainer ${scroll > headerTop ? "is-sticky" : ""}`}>
        <div>
          <Link href="/">
            <a alt="Illumidesk logo">
              <NavbarLogo width="198" height="80" />
            </a>
          </Link>
        </div>

        <div className="navbarList">
          <ul>
            <li>
              <Link href="/">
                <a onClick={handleFeatureScroll} >Features</a>
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

      {/* MOBILE NAVBAR */}
      <div className={`mobileNavbar is-sticky`}>
        <div>
          <Link href="/">
            <a alt="Illumidesk logo">
              <NavbarLogo width="198" height="80" alt="Illumidesk logo" />
            </a>
          </Link>
        </div>
        <div>
          <button
            className="toggle"
            aria-label="Toggle menu"
            onClick={onCanvasHandler}
          >
            <span className="icon-top"></span>
            <span className="icon-middle"></span>
            <span className="icon-bottom"></span>
          </button>
          <MobileNavbar show={ofcanvasShow} onClose={onCanvasHandler} />
        </div>
      </div>
    </>
  )
}

export default Navbar
