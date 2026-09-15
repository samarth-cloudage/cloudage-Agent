import "./UseCases.css";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

import RetailBankImg from "../assets/images/US-Retail-Bank.png";
import HotelImg from "../assets/images/Hotel-chain.png";
import BPOImg from "../assets/images/BPO.png";
import GlobalImg from "../assets/images/Global-Customer-Experience.png";
import EinsteinImg from "../assets/images/Einstein-Bot.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 44 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, delay, ease: "easeOut" },
});

const cases = [
  {
    image: RetailBankImg,
    tag: "Service Cloud",
    client: "Leading Retail Bank, USA",
    title: "Rebuilding a Fragile Service Cloud Org for Speed & Stability",
    challenge: "Your existing challenge text...",
    solution: [
      "Your solution 1",
      "Your solution 2",
      "Your solution 3",
      "Your solution 4"
    ],
    stats: [
      { val: "50%", label: "Faster Page Load" },
      { val: "100%", label: "Data Sync Accuracy" },
      { val: "0", label: "Production Failures Since" }
    ]
  },

  {
    image: HotelImg,
    tag: "Experience Cloud",
    client: "Global Hotel Chain",
    title: "Modernizing a Hard-Coded Experience Cloud Portal",
    challenge: "Your existing challenge text...",
    solution: [
      "Your solution 1",
      "Your solution 2",
      "Your solution 3",
      "Your solution 4"
    ],
    stats: [
      { val: "90%", label: "Less Development Time" },
      { val: "80%", label: "Staff Productivity Gain" },
      { val: "60%", label: "Faster Page Performance" }
    ]
  },

  {
    image: BPOImg,
    tag: "Automation",
    client: "Enterprise BPO Provider",
    title: "Automating Invoice Processing with OCR + Apex",
    challenge: "Your existing challenge text...",
    solution: [
      "Your solution 1",
      "Your solution 2",
      "Your solution 3",
      "Your solution 4"
    ],
    stats: [
      { val: "70%", label: "Less Manual Work" },
      { val: "35%", label: "Revenue Increase" },
      { val: "70%", label: "Team Productivity Boost" }
    ]
  },

  {
    image: RetailBankImg,
    tag: "Low-Code Migration",
    client: "Leading HR Software & Service Company, USA",
    title: "Merging Multiple Salesforce Orgs with a Low-Code Rewrite",
    challenge: "Your existing challenge text...",
    solution: [
      "Your solution 1",
      "Your solution 2",
      "Your solution 3",
      "Your solution 4"
    ],
    stats: [
      { val: "100%", label: "Merge Accuracy" },
      { val: "90%", label: "Solution Built Low-Code" },
      { val: "0", label: "Business Logic Missed" }
    ]
  },

  {
    image: GlobalImg,
    tag: "Salesforce CPQ",
    client: "Global Customer Experience Management Company",
    title: "Building a Salesforce CPQ Engine for Complex Multi-Region Sales",
    challenge: "Your existing challenge text...",
    solution: [
      "Your solution 1",
      "Your solution 2",
      "Your solution 3",
      "Your solution 4",
      "Your solution 5"
    ],
    stats: [
      { val: "100%", label: "Configuration Accuracy" },
      { val: "60%", label: "Faster Approvals" },
      { val: "Global", label: "Compliance Achieved" }
    ]
  },

  {
    image: EinsteinImg,
    tag: "Einstein Bot + ServiceNow",
    client: "Enterprise Service Organization",
    title: "Automating Incident Management with Einstein Bot and ServiceNow",
    challenge: "Your existing challenge text...",
    solution: [
      "Your solution 1",
      "Your solution 2",
      "Your solution 3",
      "Your solution 4",
      "Your solution 5"
    ],
    stats: [
      { val: "24/7", label: "Self-Service Support" },
      { val: "100%", label: "Incident Visibility" },
      { val: "Automated", label: "Incident Creation" }
    ]
  }
];

function UseCases() {
  return (
    <div className="usecases-v2">
      <section className="uc-hero">
        <div className="container">
          <motion.div className="uc-hero-inner" {...fadeUp(0)}>
            <div className="section-pill">OUR WORK</div>
            <h1>Real Challenges. Real Salesforce Solutions.</h1>
            <p>
              A look at how we've helped businesses fix broken orgs,
              modernize outdated systems, and automate the work that
              used to slow them down.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="uc-cases-section">
        <div className="container">
          {cases.map((item, i) => (
            <motion.div
              key={item.title}
              className="uc-case-card"
              {...fadeUp(i * 0.1)}
            >
              <div className="uc-case-visual">
                <img
                  src={item.image}
                  alt={item.client}
                  className="uc-case-image"
                />

                <div className="uc-case-tag">
                  {item.tag}
                </div>

                <div className="uc-case-client">
                  {item.client}
                </div>
              </div>

              <div className="uc-case-body">
                <h3>{item.title}</h3>

                <div className="uc-case-block">
                  <span className="uc-case-label">
                    The Challenge
                  </span>
                  <p>{item.challenge}</p>
                </div>

                <div className="uc-case-block">
                  <span className="uc-case-label">
                    What We Did
                  </span>

                  <ul className="uc-case-list">
                    {item.solution.map((line) => (
                      <li key={line}>
                        <FaCheckCircle />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="uc-case-stats-wrapper">
                  <span className="uc-case-label">
                    Results
                  </span>

                  <div className="uc-case-stats">
                    {item.stats.map((s) => (
                      <div className="uc-stat" key={s.label}>
                        <h4>{s.val}</h4>
                        <p>{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="uc-cta-section">
        <div className="container">
          <motion.div
            className="uc-cta-box"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <div className="uc-cta-content">
              <div className="uc-cta-pill">
                LET'S BUILD YOURS NEXT
              </div>

              <h2>Have a Similar Challenge?</h2>

              <p>
                Tell us what's slowing your Salesforce org down —
                we'll show you exactly how we'd fix it.
              </p>

              <a href="/contact" className="uc-cta-btn">
                Start a Conversation
                <FaArrowRight />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default UseCases;