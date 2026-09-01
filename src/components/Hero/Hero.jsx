import "./Hero.css";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle, FaAward, FaStar, FaRocket } from "react-icons/fa";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

function Hero() {
    return (
        <div className="hero-wrap">
            <section className="hero">
                <div className="hero-inner">
                    {/* Eyebrow */}
                    <motion.div className="hero-tag" {...fadeUp(0)}>
                        <span className="tag-dot" />
                        Technology & Consulting Partner
                    </motion.div>

                    {/* Headline */}
                    <motion.h1 className="hero-h1" {...fadeUp(0.1)}>
                        We Turn Your Business
                        <br />
                        Ideas Into <span className="gw">Digital Reality.</span>
                    </motion.h1>

                    {/* Sub */}
                    <motion.p className="hero-sub" {...fadeUp(0.2)}>
                        From Salesforce consulting to custom web applications CloudAge Informatica helps businesses streamline operations, automate processes
                        and grow faster with the right technology.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div className="hero-cta" {...fadeUp(0.3)}>
                        <a href="/services" className="btn-main">
                            Explore Services <FaArrowRight />
                        </a>
                        <a href="/contact" className="btn-ghost">
                            Talk to an Expert
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
