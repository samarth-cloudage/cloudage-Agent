import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTopButton.css";

function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

            setProgress(pct);
            setVisible(scrollTop > 400);
        };

        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const radius = 21;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <button
            className={`scroll-top-btn ${visible ? "show" : ""}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <svg className="scroll-top-ring" viewBox="0 0 48 48">
                <circle className="ring-bg" cx="24" cy="24" r={radius} />
                <circle
                    className="ring-progress"
                    cx="24"
                    cy="24"
                    r={radius}
                    style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: offset,
                    }}
                />
            </svg>
            <FaArrowUp className="scroll-top-icon" />
        </button>
    );
}

export default ScrollToTopButton;