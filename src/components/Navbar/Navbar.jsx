import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import CloudAgeLogo from "../../assets/images/CloudAgeLogo.png";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [logoError, setLogoError] = useState(false);

    useEffect(() => {
        let lastScroll = window.scrollY;

        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const delta = currentScroll - lastScroll;

            // add glass effect after scrolling a little
            setScrolled(currentScroll > 40);

            // always show near top
            if (currentScroll < 80) {
                setShowNavbar(true);
            }
            // scrolling DOWN fast enough → hide (ignore tiny jitters)
            else if (delta > 6) {
                setShowNavbar(false);
            }
            // scrolling UP → reveal
            else if (delta < -4) {
                setShowNavbar(true);
            }

            lastScroll = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    const links = [
        { path: "/", name: "Home" },
        { path: "/about", name: "About" },
        { path: "/services", name: "Services" },
        { path: "/UseCases", name: "Use-Case" },
        { path: "/Testcase", name: "Testcase" },
        { path: "/contact", name: "Contact" },
    ];

    // Reusable so desktop + mobile logos can never fall out of sync
    const Logo = ({ onClick }) => (
        <NavLink to="/" className="logo" onClick={onClick}>
            {logoError ? (
                <span className="logo-fallback">
                    Cloud<span>Age</span>
                </span>
            ) : (
                <img src={CloudAgeLogo} alt="CloudAge Informatica" className="logo-image" onError={() => setLogoError(true)} />
            )}
        </NavLink>
    );

    return (
        <>
            <header className={`navbar ${scrolled ? "scrolled" : ""} ${showNavbar ? "show-navbar" : "hide-navbar"}`}>
                <div className="container navbar-container">
                    <Logo onClick={closeMenu} />

                    <nav className="desktop-nav">
                        {links.map((item) => (
                            <NavLink key={item.path} to={item.path} end={item.path === "/"} className={({ isActive }) => (isActive ? "active" : "")}>
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="navbar-actions">
                        <NavLink to="/contact" className="nav-btn">
                            Start Project
                            <FaArrowRight />
                        </NavLink>

                        <button className="hamburger" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
                            <FaBars />
                        </button>
                    </div>
                </div>
            </header>

            <div className={menuOpen ? "mobile-overlay show" : "mobile-overlay"} onClick={closeMenu} />

            <aside className={menuOpen ? "mobile-menu open" : "mobile-menu"}>
                <div className="mobile-header">
                    <Logo onClick={closeMenu} />
                    <button className="close-btn" aria-label="Close menu" onClick={closeMenu}>
                        <FaTimes />
                    </button>
                </div>

                <p className="mobile-subtitle">Salesforce Consulting &amp; Digital Transformation</p>

                <nav className="mobile-links">
                    {links.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === "/"}
                            onClick={closeMenu}
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>

                <NavLink to="/contact" className="mobile-btn" onClick={closeMenu}>
                    Start Your Project
                    <FaArrowRight />
                </NavLink>
            </aside>
        </>
    );
}

export default Navbar;
