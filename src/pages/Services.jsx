import "./Services.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { HiBadgeCheck } from "react-icons/hi";
import {
  FaArrowRight,
  FaArrowLeft,
  FaCertificate,
  FaSalesforce,
  FaCheckCircle,
  FaLaptopCode,
  FaHeadset,
  FaCogs,
  FaPuzzlePiece,
  FaCode,
  FaSyncAlt,
  FaBolt,
  FaCloud,
  FaServer,
  FaPhoneAlt,
  FaWordpress,
  FaShoppingCart,
  FaReact,
  FaPython,
  FaPhp,
  FaNodeJs,
  FaMicrosoft,
  FaStore,
  FaLaravel,
  FaJoomla,
  FaHtml5,
  FaDrupal,
  FaCss3Alt,
  FaAngular,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
/* ---------- count-up used in the stats row (same pattern as About.jsx) ---------- */


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

/* ---------- content pulled from cloudageinformatica.com/service.html ---------- */
const pillars = [
  {
    icon: <FaSalesforce />,
    title: "Salesforce Consulting",
    desc: "We standardize and customize Salesforce to run your organization exactly the way you want it to.",
    anchor: "#salesforce",
  },
  {
    icon: <FaLaptopCode />,
    title: "Web App Development",
    desc: "Design and engineering expertise that turns your idea into a website your clients actually remember.",
    anchor: "#webapp",
  },
];

const salesforceServices = [
  {
    icon: <FaSalesforce />,
    title: "Salesforce Consulting",
    desc: "We assist companies in their digital transformation initiatives, helping you provide maximum value to your consumers.",
  },
  {
    icon: <FaCloud />,
    title: "Salesforce Implementation",
    desc: "We've successfully implemented a range of Salesforce products, including Sales Cloud, Marketing Cloud and more.",
  },
  {
    icon: <FaHeadset />,
    title: "Support Services",
    desc: "Complete Salesforce support that guarantees you get the most from your investment — technical strategy to business alignment.",
  },
  {
    icon: <FaCogs />,
    title: "Managed Services",
    desc: "We manage your org end-to-end: optimization, strategic planning, enhancements, migration, and CoE.",
  },
  {
    icon: <FaPuzzlePiece />,
    title: "Salesforce Customization",
    desc: "Technical experience combined with business understanding to deliver custom Salesforce solutions that boost revenue and ROI.",
  },
  {
    icon: <FaCode />,
    title: "Salesforce Development",
    desc: "End-to-end development — planning, strategizing and installing — customised to your specific company requirements.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Salesforce Integration",
    desc: "A robust integration plan that ensures increased company speed, agility and scalability.",
  },
  {
    icon: <FaBolt />,
    title: "Lightning Migration",
    desc: "Switching from Classic to Lightning becomes a breeze, with a real boost in productivity and reporting visuals.",
  },
];

const webAppServices = [
  {
    icon: <FaLaptopCode />,
    title: "Front-End Development",
    desc: "A skilled team that's been creating attractive, responsive frontend interfaces for years — built to help your product stand out.",
  },
  {
    icon: <FaServer />,
    title: "Back-End Development",
    desc: "Complex backend web development using agile methodologies and best practices, built for the most scalable architecture possible.",
  },
];

const techStack = [
  { icon: <FaWordpress />, label: "WordPress" },
  { icon: <FaShoppingCart />, label: "Shopify" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaPython />, label: "Python" },
  { icon: <FaPhp />, label: "PHP" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <FaMicrosoft />, label: ".NET" },
  { icon: <FaLaravel />, label: "Laravel" },
  { icon: <FaCode />, label: "jQuery" },
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <FaCss3Alt />, label: "CSS" },
  { icon: <FaAngular />, label: "AngularJS" },
];

/* NOTE: these still point at the old site's asset folder. Download them into
   /src/assets/certificates and swap the src below to import them locally —
   hotlinking works for now but shouldn't be the long-term setup. */
const certificateImages = import.meta.glob(
  "../assets/certificates/*.png",
  {
    eager: true,
    import: "default",
  }
);

const certificates = Object.values(certificateImages).map((img) => ({
  src: img,
}));
import { Helmet } from "react-helmet-async";
function Services() {
  const [certSwiper, setCertSwiper] = useState(null);

  return (
    <div className="ca-services-blue">
       <Helmet>

  <title>Salesforce Services | CloudAge Informatica</title>

  <meta
    name="description"
    content="Explore Salesforce implementation, Experience Cloud, Service Cloud, integrations and custom Salesforce development."
  />

  <link
    rel="canonical"
    href="https://cloudage-website.pages.dev/services"
  />

  <meta name="robots" content="index,follow" />

  <meta property="og:type" content="website" />

  <meta
    property="og:title"
    content="Salesforce Services | CloudAge Informatica"
  />

  <meta
    property="og:description"
    content="Explore Salesforce implementation, Experience Cloud, Service Cloud, integrations and custom Salesforce development."
  />

  <meta
    property="og:url"
    content="https://cloudage-website.pages.dev/services"
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
      <section className="aboutHero">

    <div className="container aboutHeroGrid">

        <motion.div
            className="aboutContent"
            initial={{opacity:0,x:-40}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:.7}}
            viewport={{once:true}}
        >

            <span className="heroTag">
                Our Services
            </span>

            <h1>

                Helping Businesses

                <br/>

                <span>Transform Through</span>

                <br/>

                Salesforce Innovation

            </h1>

            <p>

                CloudAge Informatica is a Salesforce consulting company
                helping startups and enterprises simplify business
                operations through CRM implementation, Experience Cloud,
                custom development, automation and integrations.

            </p>

            <div className="heroList">

                <div>✓ Salesforce Consulting</div>

                <div>✓ CRM Implementation</div>

                <div>✓ Experience Cloud</div>

                <div>✓ API Integration</div>

                <div>✓ Custom Development</div>

                <div>✓ Long Term Support</div>

            </div>

            <div className="heroButtons">
                            
            <Link to="/contact" className="primaryBtn">
                Let's Talk
            </Link>


            </div>

        </motion.div>

      

    </div>

</section>

      {/* ================= PILLARS ================= */}
      <section className="pillars">
        <div className="container">
          <motion.div className="section-title" {...fadeUp()}>
            <span className="pill-tag">WHAT WE DO</span>
            <h2>Two Specialties. Zero Half-Measures.</h2>
            <p>
              We don't spread thin across everything — we go deep on
              Salesforce and web app development, so both stay genuinely
              excellent.
            </p>
          </motion.div>

          <div className="pillar-grid">
            {pillars.map((p, i) => (
              <motion.a
                href={p.anchor}
                className="pillar-card"
                key={p.title}
                {...fadeUp(0.1 * i)}
              >
                <div className="pillar-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className="pillar-link">
                  Explore <FaArrowRight />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SALESFORCE ================= */}
      <section className="service-block" id="salesforce">
        <div className="container">
          <motion.div className="section-title" {...fadeUp()}>
            <span className="pill-tag">SALESFORCE CONSULTING</span>
            <h2>Every Angle Of Salesforce, Covered</h2>
            <p>
              Consider us your Salesforce consulting partner — from first
              implementation to the migration that finally moves you to
              Lightning.
            </p>
          </motion.div>

          <div className="service-grid">
            {salesforceServices.map((s, i) => (
              <motion.div className="service-card" key={s.title} {...fadeUp(0.05 * i)}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     <section className="certificate-section">

    <div className="cert-glow cert-glow-a" aria-hidden="true" />
    <div className="cert-glow cert-glow-b" aria-hidden="true" />

    <div className="container">

        <motion.div className="section-title" {...fadeUp()}>
          <span className="pill-tag">
           <MdVerified style={{ position: "relative", top: "2px", marginRight: "6px" }} />
            CERTIFIED &amp; TRUSTED
          </span>
          <h2>Backed By The Credentials That Matters</h2>
          <p>
            Real certifications from real programs — the same expertise we
            put to work on your org, on paper.
          </p>
        </motion.div>

       <motion.div
  className="cert-carousel-shell"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <button
    className="cert-nav-btn"
    onClick={() => certSwiper?.slidePrev()}
    aria-label="Previous certificate"
  >
    <FaArrowLeft />
  </button>

  <Swiper
    modules={[Autoplay, Pagination]}
    spaceBetween={30}
    slidesPerView={3}
    loop={true}
    speed={800}
    centeredSlides={false}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }}
    pagination={{
      clickable: true,
    }}
    onSwiper={setCertSwiper}
    breakpoints={{
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 3,
      },
    }}
  >
    {certificates.map((c, index) => (
      <SwiperSlide key={index}>
        <motion.div
          className="certificate-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.45,
            delay: (index % 3) * 0.08,
          }}
          whileHover={{ y: -10 }}
        >
          <span className="certificate-shine" />

          <img src={c.src} alt={`Certificate ${index + 1}`} />
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>

  <button
    className="cert-nav-btn"
    onClick={() => certSwiper?.slideNext()}
    aria-label="Next certificate"
  >
    <FaArrowRight />
  </button>
</motion.div>

    </div>

</section>

      {/* ================= WEB APP ================= */}
      <section className="service-block alt" id="webapp">
        <div className="container">
          <motion.div className="section-title" {...fadeUp()}>
            <span className="pill-tag">WEB APP DEVELOPMENT</span>
            <h2>Frontend That Turns Heads, Backend That Holds Up</h2>
            <p>
              Design and engineering under one roof, so nothing gets lost in
              translation between how it looks and how it works.
            </p>
          </motion.div>

          <div className="service-grid webapp-grid">
            {webAppServices.map((s, i) => (
              <motion.div className="service-card large" key={s.title} {...fadeUp(0.08 * i)}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECH STACK MARQUEE ================= */}
      <section className="marquee-section">
        <motion.div className="section-title light" {...fadeUp()}>
          <span className="pill-tag on-dark">OUR STACK</span>
          <h2>Built On Tools That Actually Scale</h2>
        </motion.div>


        <div className="marquee-stack">
          <div className="marquee-row">
            <div className="marquee-track track-left">
              {[...techStack, ...techStack].map((t, i) => (
                <span className="tech-chip" key={`a-${i}`}>
                  {t.icon}
                  {t.label}
                </span>
              ))}
            </div>
          </div>

         
        </div>
      </section>



      {/* ================= CLOSING CTA ================= */}
      
      <section className="closing-cta">
        <div className="cta-blob" aria-hidden="true" />
        <div className="cta-blob cta-blob-b" aria-hidden="true" />
        <div className="container cta-inner">
          <motion.div className="cta-copy" {...fadeUp()}>
            <span className="pill-tag on-dark">HAVE A BUSINESS PROBLEM?</span>
            <h2>Just Dial Us — No Hesitation, We Have The Expert Team</h2>
            <p>
              Whether it's a Salesforce org that's fighting you or a website
              that isn't converting, tell us where it hurts. We'll take it
              from there.
            </p>
            <div className="cta-actions">
              <a href="/contact" className="btn-primary light">
                Start The Conversation <FaArrowRight />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <span className="cta-card-badge">
              <MdVerified /> Certified Salesforce Partner
            </span>

            <a href="tel:+919265126818" className="cta-card-phone">
              <span className="cta-card-icon">
                <FaPhoneAlt />
              </span>
              <span className="cta-card-phone-text">
                <small>Call us directly</small>
                <strong>+91 92651 26818</strong>
              </span>
            </a>

           
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;