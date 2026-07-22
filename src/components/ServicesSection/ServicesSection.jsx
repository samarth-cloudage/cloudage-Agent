import "./ServicesSection.css";
import { motion } from "framer-motion";
import {
  FaSalesforce,
  FaCloud,
  FaUsers,
  FaBolt,
  FaLink,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaSalesforce />,
    title: "📈 Increase Sales",
    text: "Convert more leads and give your sales team complete visibility.",
    card: "card-1",
  },
  {
    icon: <FaCloud />,
    title: "⚡ Eliminate Manual Work",
    text: "Automate repetitive processes with Salesforce Flows and AI.",
    card: "card-2",
  },
  {
    icon: <FaUsers />,
    title: "😊 Delight Customers",
    text: "Deliver faster support and personalized customer experiences.",
    card: "card-3",
  },
  {
    icon: <FaBolt />,
    title: "🔗 Connect Everything",
    text: "Integrate Salesforce with ERP, WhatsApp, SAP, websites and APIs.",
    card: "card-4",
    //featured: true,
  },
  {
    icon: <FaLink />,
    title: "📊 Make Better Decisions",
    text: "Real-time dashboards and reports for smarter business decisions.",
    card: "card-5",
  },
  {
    icon: <FaChartLine />,
    title: "🚀 Scale Without Limits",
    text: "Build a CRM that grows alongside your business.",
    card: "card-6",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 44 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, delay, ease: "easeOut" },
});

function ServicesSection() {
  return (
    <section className="services-v2">
      <div className="container">
        {/* Heading */}
        <motion.div className="svc-heading" {...fadeUp(0)}>
          <div className="svc-pill">WHAT WE DELIVER</div>
          <h2>
            Salesforce Solutions That
            <br />
            <em>Drive Real Growth</em>
          </h2>
          <p>
            We design, implement and optimize Salesforce solutions that streamline
            operations, automate processes and accelerate your digital transformation.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="bento-grid">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              className={`svc-card ${svc.card}${svc.featured ? " featured" : ""}`}
              {...fadeUp(i * 0.1)}
            >
              <div className="svc-icon">{svc.icon}</div>
              <h3>{svc.title}</h3>
              <p>{svc.text}</p>
            
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div className="svc-cta" {...fadeUp(0.2)}>
          <div className="svc-cta-text">
            <h3>Not sure where to start?</h3>
            <p>
              Our consultants will audit your current setup and map out a roadmap
              that makes sense for your business — at no cost.
            </p>
          </div>
          <a href="/contact" className="svc-cta-btn">
            Get a Free Audit <FaArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;