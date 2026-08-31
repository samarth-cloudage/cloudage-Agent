import "./Footer.css";
//import CloudAgeLogo from "../../assets/images/CloudAgeLogo.png";
import CloudAgeLogos from "../../assets/images/CloudAgeLogos.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
//import SalesforcePartnerLogo from "../../assets/images/SF-partner.png";
import gstudio from "../../assets/images/gstudio.png";

function Footer() {

    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            {/* top accent line */}
            <div className="footer-accent-line" />

            <div className="container footer-container">
                {/* ── Col 1: Brand ── */}
                <div className="footer-col footer-brand">
                    <img src={CloudAgeLogos} alt="CloudAge Informatica Logo" className="footer-logo" />
                    {/* <img src={SalesforcePartnerLogo} alt="Salesforce Partner Logo" className="footer-partner-logo" /> */}
                    <img src={gstudio} alt="gstudio Logo" className="footer-gstudio-logo" />
                    <p className="footer-tagline">
                        Solutions That
                    
                        Drive Real
                      
                        Growth.
                    </p>

                    {/* Social icons — uncomment when ready
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/company/cloudage-informatica" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
          */}
                </div>

                {/* ── Col 2: Quick Links ── */}
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li>
                            <Link to="/">
                                <FaArrowRight /> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                <FaArrowRight /> About
                            </Link>
                        </li>
                        <li>
                            <Link to="/services">
                                <FaArrowRight /> Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <FaArrowRight /> Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* ── Col 3: Services ── */}
                <div className="footer-col">
                    <h3>Services</h3>
                    <ul className="footer-links">
                        <li>
                            <Link to="/services">
                                <FaArrowRight /> Salesforce Consulting
                            </Link>
                        </li>
                        <li>
                            <Link to="/services">
                                <FaArrowRight /> Sales Cloud
                            </Link>
                        </li>
                        <li>
                            <Link to="/services">
                                <FaArrowRight /> Service Cloud
                            </Link>
                        </li>
                        <li>
                            <Link to="/services">
                                <FaArrowRight /> Experience Cloud
                            </Link>
                        </li>
                        <li>
                            <Link to="/services">
                                <FaArrowRight /> CRM Automation
                            </Link>
                        </li>
                        <li>
                            <Link to="/services">
                                <FaArrowRight /> Lightning Migration
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* ── Col 4: Contact ── */}
                <div className="footer-col">
                    <h3>Get In Touch</h3>
                    <div className="footer-contact-list">
                        <div className="footer-contact-item">
                            <span className="fc-icon">
                                <FaMapMarkerAlt />
                            </span>
                            <span className="fc-text">
                                409 Soham Arcade, Near Bagban Circle,
                                <br />
                                Gauravpath road, Surat,
                                <br />
                                Gujarat 394510, India
                            </span>
                        </div>

                        <div className="footer-contact-item">
                            <span className="fc-icon">
                                <FaPhoneAlt />
                            </span>
                            <a href="tel:+919265126818" className="fc-text fc-link">
                                +91 92651 26818
                            </a>
                        </div>

                        <div className="footer-contact-item">
                            <span className="fc-icon">
                                <FaEnvelope />
                            </span>
                            <a href="mailto:contact@cloudageinformatica.com" className="fc-text fc-link">
                                contact@cloudageinformatica.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── bottom bar ── */}
            <div className="footer-bottom">
               <span>
  © 2021–{currentYear} CloudAge Informatica Pvt. Ltd. All rights reserved. </span>
                {/* <span className="footer-bottom-sep" />
        <span>Surat, Gujarat, India</span> */}
            </div>
        </footer>
    );
}

export default Footer;
