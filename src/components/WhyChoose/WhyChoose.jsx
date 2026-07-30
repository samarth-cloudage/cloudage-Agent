import "./WhyChoose.css";
import { motion } from "framer-motion";
import {
    FaAward,
    FaUserTie,
    FaShieldAlt,
    FaClock,
    FaHeadset,
    FaHandshake,
    FaArrowRight,
} from "react-icons/fa";
import CountNumber from "../CountNumber";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 44 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.65, delay, ease: "easeOut" },
});

const features = [
    {
        icon: <FaAward />,
        title: "Certified Salesforce Experts",
        text: "Our experienced professionals deliver secure, scalable and future-ready CRM solutions built to last.",
    },
    {
        icon: <FaUserTie />,
        title: "Integrity & Transparency",
        text: "Honest communication, fair pricing, and delivering exactly what we promise — nothing hidden.",
    },
    {
        icon: <FaShieldAlt />,
        title: "Enterprise-Grade Quality",
        text: "Every implementation follows Salesforce best practices, security standards and clean architecture.",
    },
    {
        icon: <FaClock />,
        title: "On-Time Delivery",
        text: "Structured planning and agile execution means you go live on the date we agreed — not later.",
    },
    {
        icon: <FaHeadset />,
        title: "Skilled, Ownership-Driven Team",
        text: "Certified consultants who focus on outcomes and take ownership of every engagement.",
    },
    {
        icon: <FaHandshake />,
        title: "Beyond Just Development",
        text: "We build long-term partnerships with continuoussupport — not one-and-done projects.",
    },
];

const clouds = [
    "Sales Cloud",
    "Service Cloud",
    "Experience Cloud",
    "Marketing Cloud",
    "Lightning Web Components",
    "Apex Development",
    "Flow Automation",
    "REST API Integration",
    "CRM Migration",
    "Managed Services",
    "Health Cloud",
    "Lightning Components",
    "Apttus & Custom CPQ",
    "Visualforce",
    "Custom Development",
];

const steps = [
    { num: "01", title: "Consultation", desc: "We understand your business requirements and goals." },
    { num: "02", title: "Assessment", desc: "Evaluate your Salesforce org for gaps and opportunities." },
    { num: "03", title: "Planning", desc: "Strategically map the implementation, step by step." },
    { num: "04", title: "Delivery", desc: "Configure, integrate, and customize to spec." },
    { num: "05", title: "Managed Support", desc: "Ongoing optimization, training, and support." },
];

function WhyChoose() {
    return (
        <div className="why-v2">
            {/* ── STATS STRIP ── */}
            <motion.div
                className="stats-strip"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: .8 }}
            >
                <div className="container">
                    <div className="stats-inner">
                        {[
                            { val: 10, suf: "+", label: "Satisfied Clients" },
                            { val: 50, suf: "+", label: "Projects Delivered" },
                            { val: 3, suf: "+", label: "Upcoming Projects" },
                        ].map((s, i) => (
                            <motion.div
                                className="stat-block"
                                key={s.label}
                                {...fadeUp(i * 0.1)}
                            >
                                <h2>
                                    <CountNumber end={s.val} suffix={s.suf} />
                                </h2>
                                <p>{s.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* ── FEATURES ── */}
            <section className="features-section">
                <div className="container">
                    <motion.div className="section-head" {...fadeUp(0)}>
                        <div className="section-pill">WHY CLOUDAGE</div>
                        <h2>Why Businesses Choose CloudAge</h2>
                        <p>
                            We combine Salesforce expertise, industry experience and a
                            customer-first mindset to deliver CRM solutions that help
                            organizations grow faster and smarter.
                        </p>
                    </motion.div>

                    <div className="feature-grid">
                        {features.map((item, i) => (
                            <motion.div
                                key={item.title}
                                className="feature-card"
                                {...fadeUp(i * 0.1)}
                                whileHover={{ y: -10 }}
                            >
                                <div className="feat-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── EXPERTISE CHIPS ── */}
            <section className="expertise-section">
                <div className="container">
                    <motion.div {...fadeUp(0)}>
                        <div className="section-pill">OUR EXPERTISE</div>
                        <h2>Deep Salesforce Capabilities</h2>
                        <p className="sub">
                            From core clouds to custom development — we cover the full
                            Salesforce ecosystem.
                        </p>
                    </motion.div>

                    <div className="chip-grid">
                        {clouds.map((cloud, i) => (
                            <motion.span
                                key={cloud}
                                className="exp-chip"
                                initial={{ opacity: 0, scale: .8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * .055, duration: .4 }}
                            >
                                {cloud}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROCESS ── */}
            <section className="process-section">
                <div className="container">
                    <motion.div className="section-head" {...fadeUp(0)}>
                        <div className="section-pill">OUR PROCESS</div>
                        <h2>How We Deliver Success</h2>
                        <p>
                            From the first call to long-term support — every engagement
                            follows a proven five-step roadmap.
                        </p>
                    </motion.div>

                    <div className="process-steps">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.num}
                                className="step-item"
                                initial={{ opacity: 0, y: 48 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * .16, duration: .6 }}
                            >
                                <div className="step-dot">{step.num}</div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="cta-section">
                <div className="container">
                    <motion.div
                        className="cta-box"
                        initial={{ opacity: 0, scale: .95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: .75 }}
                    >
                        <div className="cta-content">
                            <div className="cta-pill">LET'S BUILD TOGETHER</div>
                            <h2>
                                Ready to Accelerate Your Salesforce Journey?
                            </h2>
                            <p>
                                Whether you're starting from scratch or optimizing an existing
                                org, our experts will map the fastest path to real results.
                            </p>
                            <a href="/contact" className="cta-btn">
                                Let's Talk <FaArrowRight />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default WhyChoose;