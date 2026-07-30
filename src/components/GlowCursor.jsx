import { useEffect, useRef } from "react";
import "./GlowCursor.css";

function GlowCursor() {
    const glow = useRef(null);

    useEffect(() => {
        const move = (e) => {
            if (!glow.current) return;

            glow.current.animate(
                {
                    left: `${e.clientX}px`,
                    top: `${e.clientY}px`,
                },
                {
                    duration: 500,
                    fill: "forwards",
                    easing: "ease-out",
                },
            );
        };

        window.addEventListener("mousemove", move);

        return () => window.removeEventListener("mousemove", move);
    }, []);

    return <div className="cursor-glow" ref={glow}></div>;
}

export default GlowCursor;
