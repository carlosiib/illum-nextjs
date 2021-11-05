import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className="">
        <div className="footerContent">
          <div className="footerFirstCol">
            <div>
              <img
                src="/svg/illumidesk-brand-logo-secondary.svg"
                alt="Illumidesk company logo"
                width="160"
                height="40"
              />
            </div>
            <div>
              <ul className="footerIcons">
                <li>
                  <Link href="https://illumidesk-community.slack.com/" target="_blank" >
                    <a arial-label="Slack">
                      <img src="/svg/footer-slack-icon.svg" alt="Illumidesk Slack" width="22" height="22" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/illumidesk" target="_blank" >
                    <a arial-label="Github">
                      <img src="/svg/footer-github-icon.svg" alt="Illumidesk Github" width="22" height="22" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/" target="_blank" >
                    <a arial-label="Twitter">
                      <img src="/svg/footer-twitter-icon.svg" alt="Illumidesk Twitter" width="22" height="22" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <p><span>&copy;</span> Illumidesk LLC</p>
          </div>
          <div className="footerSecondCol">
            <div>
              <p>Resources</p>
              <ul>
                <li>
                  <Link href="/" >
                    <a >
                      Blog
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/" >
                    <a >
                      Docs
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/" >
                    <a >
                      Community
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/" >
                    <a >
                      Pricing
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p>Legal</p>
              <ul>
                <li>
                  <Link href="/" >
                    <a >
                      Cookies
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/" >
                    <a >
                      Terms
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/" >
                    <a >
                      Privacy
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/" >
                    <a >
                      Security
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p>Company</p>
              <ul>
                <li>
                  <Link href="/" >
                    <a >
                      About us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/" >
                    <a >
                      Contact
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/" >
                    <a >
                      Careers
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/" >
                    <a >
                      Investors
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
