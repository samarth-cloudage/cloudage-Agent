import "./About.css";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaBullseye,
  FaEye,
  FaGem,
  FaHospital,
  FaUniversity,
  FaIndustry,
  FaGraduationCap,
  FaLaptopCode,
  FaArrowRight,
  FaUserTie,
  FaUsersCog,
  FaCode,
  FaHeadset,
  FaHome,
  FaCar,
  FaPills,
  FaShoppingBag,
  FaBuilding,
  FaMicrochip,
  FaShoppingCart
} from "react-icons/fa";

import {
  MdEngineering,
  MdFactory,
} from "react-icons/md";

import {
  GiMedicinePills,
} from "react-icons/gi";

/* ---------- small reusable count-up used in the stats row ---------- */


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const testimonials = [
  "We don't just implement Salesforce — we make sure you thrive.",
  "Your success isn't a project for us. It's a commitment.",
  "We turn open tickets into working systems, not longer backlogs.",
  "A strong Salesforce org isn't built alone — we build it with you.",
  "Results aren't luck. They're built with the right strategy.",
  "We combine strategy and engineering to drive growth you can measure.",
];

const team = [
  {
    icon: <FaUserTie />,
    role: "Salesforce Architect",
    line: "Designs the org so it still makes sense two years from now.",
  },
  {
    icon: <FaUsersCog />,
    role: "Solutions Consultant",
    line: "Turns your messiest process into a clean, documented flow.",
  },
  {
    icon: <FaCode />,
    role: "Lightning Developer",
    line: "Builds the custom pieces Salesforce doesn't ship out of the box.",
  },
  {
    icon: <FaHeadset />,
    role: "Support Lead",
    line: "Answers before small issues turn into Monday-morning fires.",
  },
];

function About() {
  return (
    <div className="ca-about-blue">
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-grid-lines" aria-hidden="true" />
       

        <div className="container hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="pill-tag">ABOUT CLOUDAGE</span>

            <h1>
              Provide The Best <span>Salesforce Solutions</span> To Grow
              Your Business
            </h1>

            <p className="hero-lead">
              We are a team of certified Salesforce experts who simplify
              operations, automate the busywork, and build systems your
              team will actually enjoy using.
            </p>

            <p className="hero-sub">
              If you're looking for a partner who designs, builds and
              supports your org end-to-end, you're in the right place. We
              work as an extension of your team — not a vendor you only
              call when something breaks.
            </p>

            <div className="hero-actions">
              <a href="/contact" className="btn-primary">
                Start a Project <FaArrowRight />
              </a>
              <a href="/services" className="btn-ghost">
                See How We Work
              </a>
            </div>
          </motion.div>

          
        </div>

   
      </section>

      {/* ================= MISSION / VISION / VALUES ================= */}
      <section className="mission">
        <div className="container">
          <motion.div className="section-title" {...fadeUp()}>
            <span className="pill-tag">OUR FOUNDATION</span>
            <h2>Mission, Vision &amp; Values</h2>
            <p>
              Everything we build is focused on delivering measurable
              business value through innovation, trust and long-term
              partnerships.
            </p>
          </motion.div>

          <div className="tilt-grid">
            <motion.div className="tilt-card" {...fadeUp(0.05)}>
              <div className="tilt-icon">
                <FaBullseye />
              </div>
              <h3>Mission</h3>
              <p>
                To help Salesforce customers of every size automate
                and simplify their business processes — turning the
                platform into a productivity engine that saves time
                and drives measurable outcomes.
              </p>
            </motion.div>

            <motion.div className="tilt-card" {...fadeUp(0.15)}>
              <div className="tilt-icon">
                <FaEye />
              </div>
              <h3>Vision</h3>
              <p>
                To be a globally trusted Salesforce implementation
                partner, known for deep platform expertise,
                transparent delivery, and long-term partnerships built
                on results.
              </p>
            </motion.div>

            <motion.div className="tilt-card" {...fadeUp(0.25)}>
              <div className="tilt-icon">
                <FaGem />
              </div>
              <h3>Core Values</h3>
              <p>
                Transparency, sharp engineering and outcomes clients can
                point to — nothing performative.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <section className="marquee-section">
        <motion.div className="section-title light" {...fadeUp()}>
          <span className="pill-tag on-dark">WHY CLIENTS STAY</span>
          <h2>Not Just Another Vendor On The Invoice</h2>
        </motion.div>

        <div className="marquee-row">
          <div className="marquee-track track-left">
            {[...testimonials, ...testimonials].map((line, i) => (
              <span className="marquee-chip" key={`a-${i}`}>
                {line}
              </span>
            ))}
          </div>
        </div>

        <div className="marquee-row">
          <div className="marquee-track track-right">
            {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map(
              (line, i) => (
                <span className="marquee-chip" key={`b-${i}`}>
                  {line}
                </span>
                
              )
            )}
    
          </div>
        </div>
       
      </section>
      

      {/* ================= TEAM ================= */}
      {/* <section className="team">
        <div className="container">
          <motion.div className="section-title" {...fadeUp()}>
            <span className="pill-tag">OUR TEAM</span>
            <h2>Meet The People Behind Your Org</h2>
            <p>
              A small, senior team — every project gets people who've done
              this before, not a rotating cast of juniors.
            </p>
          </motion.div>

          <div className="team-grid">
            {team.map((member, i) => (
              <motion.div className="team-card" key={member.role} {...fadeUp(0.08 * i)}>
                <div className="avatar-ring">
                  <span className="avatar-icon">{member.icon}</span>
                </div>
                <h3>{member.role}</h3>
                <p>{member.line}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ================= INDUSTRIES ================= */}
      <section className="industries">
        <div className="container">
          <motion.div className="section-title" {...fadeUp()}>
            <span className="pill-tag">INDUSTRIES WE SERVE</span>
            <h2>Helping Every Industry Transform Digitally</h2>
            <p>
              Our Salesforce implementations flex to fit businesses of every
              size, across the industries below.
            </p>
          </motion.div>

          <div className="industry-grid">
            {[
              { icon: <FaHospital />, label: "Healthcare Technology" },
              { icon: <FaUniversity />, label: "Banking (BFSI)" },
              { icon: <FaHome />, label: "Real Estate" },
              { icon: <GiMedicinePills />, label: "Pharmaceutical" },
               { icon: <FaCar />, label: "Automotive" },
               { icon: <MdEngineering />, label: "Engineering & Industrial" },
              { icon: <FaShoppingBag />, label: "Retail" },
              { icon: <FaIndustry />, label: "Manufacturing" },
              { icon: <FaGraduationCap />, label: "Education" },
              { icon: <FaLaptopCode />, label: "IT Services" },
              { icon: <FaMicrochip />, label: "CXM & Enterprise Software" },
              { icon: <FaBuilding />, label: "Hospitality" },
            ].map((item, i) => (
              <motion.div className="industry-chip" key={item.label} {...fadeUp(0.05 * i)}>
                {item.icon}
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLOSING CTA ================= */}
      <section className="closing-cta">
        <div className="cta-blob" aria-hidden="true" />
        <div className="container cta-inner">
          <motion.div {...fadeUp()}>
            <span className="pill-tag on-dark">LET'S BUILD TOGETHER</span>
            <h2>Let's Build A Flourishing Salesforce Org, Together</h2>
            <p>
              Your success isn't just a goal for us — it's a commitment. We
              work as your extended team: strategizing, building and
              supporting the systems that take your business further.
            </p>
            <a href="/contact" className="btn-primary light">
              Start The Conversation <FaArrowRight />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;