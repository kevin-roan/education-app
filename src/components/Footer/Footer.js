import React from "react";
import footer from "../../assets/img/footer.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer-box">
            <div className="logo">
              <div className="logo-img">
                <img src={footer} alt="" />
              </div>
              <h2>LudanEducations</h2>
            </div>
            <p>
              Embrace the future of innovation and technology with out
              cutting-edge tech business solutions.
            </p>
          </div>
          <div className="footer-box">
            <h4 className="footer_title"> Company </h4>
            <ul className="footer_links">
              <li>
                <a href="">Our Programs</a>
              </li>
              <li>
                <a href="">Our Plan</a>
              </li>
              <li>
                <a href="">Become a member</a>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h4 className="footer_title">Quick Links</h4>
            <ul className="footer_links">
              <li>
                <a href="">About Us</a>
                </li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Support Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
