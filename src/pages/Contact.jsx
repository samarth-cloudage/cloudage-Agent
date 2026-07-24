import "./Contact.css";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaCertificate,
FaBolt,
FaShieldAlt
} from "react-icons/fa";

import { MdVerified } from "react-icons/md";
/* ================= CONFIG — edit these for your real details ================= */
//const COMPANY_ADDRESS =
 // "409 Soham Arcade, Nr Bagban circle, Gauravpath road, Surat, Gujarat 394510";
const COMPANY_EMAIL = "contact@cloudageinformatica.com";
const COMPANY_PHONE = "+91 92651 26818";

// Where the form should POST to. Point this at your own backend route,
// or swap the handleSubmit logic below for a service like Formspree / EmailJS.
//const CONTACT_ENDPOINT = "http://localhost:5001/api/contact";

//const CONTACT_ENDPOINT = import.meta.env.VITE_API_URL; nodemailer 

const CONTACT_ENDPOINT = import.meta.env.VITE_API_URL_RESEND; // resend

/* const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  "Cloud Age Informatica Pvt. Ltd., " + COMPANY_ADDRESS
)}&output=embed`; */

const MAP_EMBED_SRC = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1860.0296112581993!2d72.76991427113325!3d21.18980621579495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04db2480c89d9%3A0x41a9df463ca6ff0d!2sSoham%20Arcade!5e0!3m2!1sen!2sin!4v1784269323800!5m2!1sen!2sin`;




/* ---------- live world clocks ---------- */




/* ---------- contact form ---------- */
function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Salesforce Consulting",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Please enter a valid email address.";
    if (!form.message.trim()) return "Please add a short message.";
    return "";
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const validationError = validate();

  if (validationError) {
    setError(validationError);
    setStatus("error");
    return;
  }

  setError("");
  setStatus("sending");

  try {
    const response = await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Failed");
    }

    setStatus("success");

    setForm({
      name: "",
      email: "",
      phone: "",
      interest: "Salesforce Consulting",
      message: "",
    });

  } catch (err) {
    console.error(err);

    setStatus("error");
    setError(
      "Unable to send your message. Please try again or email us directly."
    );
  }
};;

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Jane Cooper"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@company.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="phone">Phone (optional)</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 00000 00000"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="interest">I'm Interested In</label>
          <select
            id="interest"
            name="interest"
            value={form.interest}
            onChange={handleChange}
          >
            <option>Salesforce Consulting</option>
            <option>Implementation</option>
            <option>Support Services</option>
            <option>Integration</option>
            <option>Something Else</option>
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="message">Tell Us About Your Project</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="What's currently working, what isn't, and what you'd like to fix..."
          value={form.message}
          onChange={handleChange}
        />
      </div>

      {status === "error" && <p className="form-msg error">{error}</p>}
      {status === "success" && (
        <p className="form-msg success">
          Thanks — your message is in. We'll get back to you shortly.
        </p>
      )}

      <button
  className={`submit-btn ${status === "sending" ? "loading" : ""}`}
  type="submit"
  disabled={status === "sending"}
>
  {status === "sending" ? (
    <>
      <span className="loader"></span>
      Sending...
    </>
  ) : (
    <>
      Send Message
      <FaPaperPlane />
    </>
  )}
</button>
      <p className="form-fallback">
        Prefer email? Reach us directly at{" "}
        <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>
      </p>
    </form>
  );
}

/* ================= PAGE ================= */

import { Helmet } from "react-helmet-async";
function Contact() {


  return (
    <div className="ca-contact">
        <Helmet>

  <title>Contact CloudAge Informatica</title>

  <meta
    name="description"
    content="Get in touch with CloudAge Informatica for Salesforce consulting, CRM implementation and digital transformation services."
  />

  <link
    rel="canonical"
    href="https://cloudage-website.pages.dev/contact"
  />

  <meta name="robots" content="index,follow" />

  <meta property="og:type" content="website" />

  <meta
    property="og:title"
    content="Contact CloudAge Informatica"
  />

  <meta
    property="og:description"
    content="Get in touch with CloudAge Informatica for Salesforce consulting, CRM implementation and digital transformation services."
  />

  <meta
    property="og:url"
    content="https://cloudage-website.pages.dev/contact"
  />

  <meta
    property="og:image"
    content="https://cloudage-website.pages.dev/CloudAgeLogo.png"
  />

  <meta
    property="og:image:alt"
    content="CloudAge Informatica Salesforce Consulting"
  />

  <meta
    property="og:site_name"
    content="CloudAge Informatica"
  />

  <meta
    name="twitter:card"
    content="summary_large_image"
  />

</Helmet>
      {/* ================= HERO ================= */}
<section className="contact-hero">
  <div className="container contact-hero-inner">

    <motion.span
      className="pill-tag"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .6 }}
    >
      CONTACT US
    </motion.span>

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .7 }}
    >
      Let's Build Something
      <br />
      <span>Great Together</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .7, delay: .15 }}
    >
      Whether you need Salesforce consulting, custom development,
      Experience Cloud, integrations or long-term support,
      we're here to help your business grow.
    </motion.p>

        <motion.div
            className="trust-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <span className="trust-chip">
              <MdVerified /> Salesforce Certified Team
            </span>
            <span className="trust-chip">
              <FaBolt /> Fast, Direct Communication
            </span>
            <span className="trust-chip">
              <FaShieldAlt /> NDA Friendly
            </span>
          </motion.div>

  </div>
</section>
      {/* ================= INFO CARDS ================= */}
      <section className="info-section">
        <div className="container info-grid">
          <motion.div
            className="info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
          >
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Visit Us</h3>
            <p>
              Cloud Age Informatica Pvt. Ltd.
              <br />
              409 Soham Arcade, Nr Bagban circle,
              <br />
              Gauravpath road, Surat, Gujarat 394510
            </p>
          </motion.div>

          <motion.div
            className="info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <h3>Email Us</h3>
            <p>
              <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>
              <br />
              We reply within one business day.
            </p>
          </motion.div>

          <motion.div
            className="info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <div className="info-icon">
              <FaPhoneAlt />
            </div>
            <h3>Call Us</h3>
            <p>
              <a href={`tel:${COMPANY_PHONE.replace(/\s+/g, "")}`}>
                {COMPANY_PHONE}
              </a>
              <br />
              Mon–Fri, 9:30 AM – 6:30 PM IST
            </p>
          </motion.div>
        </div>
      </section>


      {/* ================= WORLD CLOCKS ================= */}
    {/* ================= GLOBAL REACH ================= */}

<section className="global-reach">



  <div className="global-orb one"></div>
  <div className="global-orb two"></div>

  <div className="container">

    <motion.div
      className="section-title global-title"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <span className="pill-tag">GLOBAL REACH</span>

      <h2>
        Connecting Businesses
        <span> Across The World</span>
      </h2>

      <p>
        From startups to enterprises, CloudAge Informatica partners with
        organizations worldwide. No matter where you're located, our experts
        are only one conversation away.
      </p>
    </motion.div>

    

  </div>

  

</section>

      {/* ================= MAP + FORM ================= */}
      <section className="map-form-section">
        <div className="container map-form-grid">
          <motion.div
            className="map-wrap"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="CloudAge Informatica office location"
              src={MAP_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>

          <motion.div
            className="form-wrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="pill-tag">SEND A MESSAGE</span>
            <h2>We'd Love To Hear From You</h2>
            <ContactForm />
          </motion.div>
        </div>
      </section>
      
      
    </div>
  );
}

export default Contact;