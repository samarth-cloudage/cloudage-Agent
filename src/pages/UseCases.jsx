import "./UseCases.css";
import { motion } from "framer-motion";
import {
    FaUniversity,
    FaHotel,
    FaFileInvoiceDollar,
    FaUsers,
    FaChartLine,
    FaArrowRight,
    FaCheckCircle,
} from "react-icons/fa";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 44 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.65, delay, ease: "easeOut" },
});

const cases = [
    {
        icon: <FaUniversity />,
        tag: "Service Cloud",
        client: "Leading Retail Bank, USA",
        title: "Rebuilding a Fragile Service Cloud Org for Speed & Stability",
        challenge:
            "A custom Service Cloud implementation was suffering from slow load times, frequent production failures, and data drifting out of sync with the bank's internal data lake — all built on a structure that didn't follow Salesforce best practices.",
        solution: [
            "Stripped out unnecessary customizations that were the root cause of instability",
            "Shifted key business logic to Lightning Flows working alongside clean Apex",
            "Rebuilt integrations with proper error tracking and full stack-trace logging",
            "Brought the org back into full Salesforce security compliance",
        ],
        stats: [
            { val: "50%", label: "Faster Page Load" },
            { val: "100%", label: "Data Sync Accuracy" },
            { val: "0", label: "Production Failures Since" },
        ],
    },
    {
        icon: <FaHotel />,
        tag: "Experience Cloud",
        client: "Global Hotel Chain",
        title: "Modernizing a Hard-Coded Experience Cloud Portal",
        challenge:
            "An outdated Experience Cloud site — built on legacy Visualforce pages and Process Builder — couldn't keep pace with the hotel chain's constantly changing operational requirements, and every change risked breaking something else.",
        solution: [
            "Rebuilt the site on a modern Lightning Web Runtime (LWR) foundation",
            "Replaced static, hard-coded logic with configurable, metadata-driven components",
            "Designed for multiple user personas across the hotel network",
            "Ran extensive testing to guarantee reliability at global scale",
        ],
        stats: [
            { val: "90%", label: "Less Development Time" },
            { val: "80%", label: "Staff Productivity Gain" },
            { val: "60%", label: "Faster Page Performance" },
        ],
    },
    {
        icon: <FaFileInvoiceDollar />,
        tag: "Automation",
        client: "Enterprise BPO Provider",
        title: "Automating Invoice Processing with OCR + Apex",
        challenge:
            "Manual invoice creation from PDFs scattered across ERP systems and file servers was slow, error-prone, and left the client unable to scale operations across their high-profile client base.",
        solution: [
            "Connected directly to file servers to pull invoice PDFs into Salesforce",
            "Used OCR to convert scanned invoice data into structured, usable records",
            "Built Apex batch jobs to auto-match invoices against purchase orders",
            "Routed only exceptions to staff — everything else ran automatically",
        ],
        stats: [
            { val: "70%", label: "Less Manual Work" },
            { val: "35%", label: "Revenue Increase" },
            { val: "70%", label: "Team Productivity Boost" },
        ],
    },
    {
        icon: <FaUsers />,
        tag: "Low-Code Migration",
        client: "Leading HR Software & Service Company, USA",
        title: "Merging Multiple Salesforce Orgs with a Low-Code Rewrite",
        challenge:
            "After acquiring another company, this HR software provider was left managing multiple Salesforce orgs built on outdated, soon-to-be-unsupported Process Builders — with no unified structure to build on.",
        solution: [
            "Ran a comprehensive analysis of every org and the business processes inside them",
            "Rewrote entire business functions using Lightning Flows in a single unified org",
            "Layered in Apex customizations only where truly required",
            "Followed Salesforce best practices throughout to keep the result scalable",
        ],
        stats: [
            { val: "100%", label: "Merge Accuracy" },
            { val: "90%", label: "Solution Built Low-Code" },
            { val: "0", label: "Business Logic Missed" },
        ],
    },
    {
        icon: <FaChartLine />,
        tag: "Salesforce CPQ",
        client: "Global Customer Experience Management Company",
        title: "Building a Salesforce CPQ Engine for Complex, Multi-Region Sales",
        challenge:
            "This company's sales and quoting process needed to handle deeply interdependent product configurations, region-specific dynamic pricing, multi-tiered approvals, and real-time sync across ERP, CRM, and supply chain systems — all while staying compliant across global markets.",
        solution: [
            "Built an advanced configuration engine with dynamic rules and constraints for accurate, consistent quotes",
            "Created custom pricing algorithms for regional variation, material costs, and customer-specific discounts",
            "Automated multi-tiered approval workflows across departments and regional offices",
            "Integrated ERP, CRM, and supply chain tools in real time using MuleSoft",
            "Designed a compliance framework covering international regulations and standards",
        ],
        stats: [
            { val: "100%", label: "Configuration Accuracy" },
            { val: "60%", label: "Faster Approvals" },
            { val: "Global", label: "Compliance Achieved" },
        ],
    },
];

function UseCases() {
    return (
        <div className="usecases-v2">
            {/* ── HERO ── */}
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
              
            {/* ── CASE STUDIES ── */}
            <section className="uc-cases-section">
                
                <div className="container">
                    
                    {cases.map((item, i) => (
                        <motion.div
                            key={item.title}
                           className="uc-case-card"
                            {...fadeUp(i * 0.1)}
                        >
                            <div className="uc-case-visual">
                                <div className="uc-case-icon">{item.icon}</div>
                                <div className="uc-case-tag">{item.tag}</div>
                                <div className="uc-case-client">{item.client}</div>
                            </div>

                            <div className="uc-case-body">
                                
                                <h3>{item.title}</h3>

                                <div className="uc-case-block">
                                    <span className="uc-case-label">The Challenge</span>
                                    <p>{item.challenge}</p>
                                </div>
                            
                                <div className="uc-case-block">
                                    
                                    <span className="uc-case-label">What We Did</span>
                                    <ul className="uc-case-list">
                                        {item.solution.map((line) => (
                                            <li key={line}>
                                                <FaCheckCircle /> {line}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                             <div className="uc-case-stats-wrapper">
  <span className="uc-case-label">Results</span>

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

            {/* ── CTA ── */}
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
                            <div className="uc-cta-pill">LET'S BUILD YOURS NEXT</div>
                            <h2>Have a Similar Challenge?</h2>
                            <p>
                                Tell us what's slowing your Salesforce org down — we'll show
                                you exactly how we'd fix it.
                            </p>
                            <a href="/contact" className="uc-cta-btn">
                                Start a Conversation <FaArrowRight />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default UseCases;