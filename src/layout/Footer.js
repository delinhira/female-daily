import React from "react";
import logo from "../assets/images/female-daily/female-daily-logo.png";
import playStore from "../assets/images/icons/play-store-icon.png";
import appStore from "../assets/images/icons/app-store-icon.png";
import facebook from "../assets/images/icons/facebook-icon.png";
import twitter from "../assets/images/icons/twitter-icon.png";
import instagram from "../assets/images/icons/instagram-icon.png";
import youtube from "../assets/images/icons/youtube-icon.png";
import Ads from "../components/general/Ads";

const Footer = () => {
  const menus = [
    "About Us",
    "Terms & Conditions",
    "Awards",
    "Feedback",
    "Privacy Policy",
    "Newsletter",
    "Contact",
    "Help",
  ];

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <ul className="bottom-nav-list">
            {menus.map((menu, index) => (
              <li key={index} className="bottom-nav-item">
                <a href="#" className="bottom-nav-link">
                  {menu}
                </a>
              </li>
            ))}
          </ul>
          <div className="copyright">
            <a href="#">
              <img src={logo} alt="Female Daily" />
            </a>
            <p>
              Copyright &copy; 2015-2017 Female Daily Network &bull; All rights
              reserved
            </p>
          </div>
        </div>
        <div className="footer-right">
          <div className="download-app">
            <p>Download Our Mobile App</p>
            <a href="https://www.facebook.com">
              <img src={appStore} alt="play-store" />
            </a>
            <a href="https://www.facebook.com">
              <img src={playStore} alt="app-store" />
            </a>
          </div>
          <div className="social-media">
            <a href="https://www.facebook.com">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://www.twitter.com">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="https://www.instagram.com">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="https://www.youtube.com">
              <img src={youtube} alt="youtube" />
            </a>
          </div>
        </div>
      </div>
      <Ads type="frame">Bottom Frame 970x50</Ads>
    </footer>
  );
};

export default Footer;
