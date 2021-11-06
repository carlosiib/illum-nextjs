import React from 'react'
import Link from 'next/link'

const MobileNavbar = ({ show, onClose }) => {

  function handleSubmenuItem() {
    const childItem = document.querySelector(".drawer-submenu")
    if (!childItem) return
    childItem.classList.toggle("show-submenu")
  }

  return (
    <div className={`mobileItemsContainer ${show && "show-drawer"}`}>
      <div className="drawersCTA">
        <img
          src="/svg/illumidesk-brand-logo-primary.svg"
          alt="Illumidesk company logo"
          width="140"
          height="40"
        />
        <button
          type="button"
          className="btn-close"
          onClick={onClose}
        >
          <img src="/svg/drawer-close.svg" width="20" height="20" alt="Drawer close menu" />
        </button>
      </div>

      <nav>
        <ul className="mobileItemsList">
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
          <li >
            <Link href="/">
              <a>
                Resources
                <button className="drawer-submenu-btn" onClick={handleSubmenuItem}>
                  <span className="downArrow"></span>
                </button>
              </a>
            </Link>
            <ul className="drawer-submenu">
              <li >
                <Link href="https://support.illumidesk.com/hc/en-us">
                  <a
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
          <li>
            <Link href="https://app.illumidesk.com/login?utm_source=main&utm_medium=free-trial-navbar-button&utm_campaign=web">
              <a>FREE TRIAL</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MobileNavbar
