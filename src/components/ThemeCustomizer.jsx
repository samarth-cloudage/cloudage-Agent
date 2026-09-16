// components/ThemeCustomizer.jsx
import { useState, useEffect } from "react";
import { FaPalette, FaTimes } from "react-icons/fa";
import "./ThemeCustomizer.css";

const presets = [
  { name: "Blue (Default)", brand: "#2563eb", brandDark: "#1d4ed8", indigo: "#4f46e5" },
  { name: "Emerald", brand: "#059669", brandDark: "#047857", indigo: "#0d9488" },
  { name: "Violet", brand: "#7c3aed", brandDark: "#6d28d9", indigo: "#8b5cf6" },
  { name: "Rose", brand: "#e11d48", brandDark: "#be123c", indigo: "#f43f5e" },
  { name: "Amber", brand: "#d97706", brandDark: "#b45309", indigo: "#ea580c" },
];

export default function ThemeCustomizer() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const applyTheme = (preset, index) => {
    document.documentElement.style.setProperty("--brand", preset.brand);
    document.documentElement.style.setProperty("--brand-dark", preset.brandDark);
    document.documentElement.style.setProperty("--indigo", preset.indigo);
    setActive(index);
    localStorage.setItem("theme-preset", JSON.stringify(preset));
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme-preset");
    if (saved) {
      const preset = JSON.parse(saved);
      document.documentElement.style.setProperty("--brand", preset.brand);
      document.documentElement.style.setProperty("--brand-dark", preset.brandDark);
      document.documentElement.style.setProperty("--indigo", preset.indigo);
    }
  }, []);

  return (
    <div className="theme-customizer">
      <button className="theme-fab" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaPalette />}
      </button>

      {open && (
        <div className="theme-panel">
          <h4>Customize Theme</h4>
          <div className="theme-swatches">
            {presets.map((p, i) => (
              <button
                key={p.name}
                className={`theme-swatch ${active === i ? "active" : ""}`}
                style={{ background: p.brand }}
                onClick={() => applyTheme(p, i)}
                title={p.name}
              />
            ))}
          </div>
          <p className="theme-current">{presets[active].name}</p>
        </div>
      )}
    </div>
  );
}