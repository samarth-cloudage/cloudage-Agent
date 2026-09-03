import { useEffect, useRef, useState } from "react";
import "./CursorFollower.css";

function CursorFollower() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDesktop = () => {
            const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
            const isWideEnough = window.innerWidth > 1024;
            setIsDesktop(hasFinePointer && isWideEnough);
        };

        checkDesktop();
        window.addEventListener("resize", checkDesktop);
        return () => window.removeEventListener("resize", checkDesktop);
    }, []);

    useEffect(() => {
        if (!isDesktop) return; // skip everything on mobile/tablet

        const dot = dotRef.current;
        const ring = ringRef.current;

        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;
        let rafId;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        };

        // Ring lags slightly behind for a smooth trailing feel
        const animateRing = () => {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
            rafId = requestAnimationFrame(animateRing);
        };

        window.addEventListener("mousemove", onMouseMove);
        animateRing();

        // Grow ring on hover over interactive elements
        const hoverables = document.querySelectorAll("a, button, .btn-main, .btn-ghost");
        const onEnter = () => ring.classList.add("cursor-hover");
        const onLeave = () => ring.classList.remove("cursor-hover");

        hoverables.forEach((el) => {
            el.addEventListener("mouseenter", onEnter);
            el.addEventListener("mouseleave", onLeave);
        });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(rafId);
            hoverables.forEach((el) => {
                el.removeEventListener("mouseenter", onEnter);
                el.removeEventListener("mouseleave", onLeave);
            });
        };
    }, [isDesktop]);

    if (!isDesktop) return null; // don't render dot/ring at all on mobile/tablet

    return (
        <>
            <div className="cursor-dot" ref={dotRef} />
            <div className="cursor-ring" ref={ringRef} />
        </>
    );
}

export default CursorFollower;