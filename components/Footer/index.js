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
                alt="Illumidesk logo"
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
                  <Link href="/blog" >
                    <a title="Blog">
                      Blog
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://support.illumidesk.com/hc/en-us" >
                    <a target="_blank" rel="noreferrer" title="Documentation">
                      Docs
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/" >
                    <a title="Community">
                      Community
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" >
                    <a title="Pricing">
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
                  <Link href="/cookie-policy" >
                    <a title="Cookie Policy">
                      Cookies
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" >
                    <a title="Terms and conditions">
                      Terms
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/" >
                    <a title="Privacy Policy">
                      Privacy
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/" >
                    <a title="Security">
                      Security
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
