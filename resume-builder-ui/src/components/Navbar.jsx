import { useEffect, useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 40px",
        background: darkMode ? "#111827" : "#2563eb",
        color: "white",
        boxShadow: "0 5px 20px rgba(0,0,0,.15)",
        transition: ".3s",
      }}
    >
      {/* Logo */}

      <div
        style={{
          fontSize: "24px",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        🤖 AI Resume Builder
      </div>

      {/* Menu */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <span style={{ cursor: "pointer" }}>Home</span>

        <span style={{ cursor: "pointer" }}>Features</span>

        <span style={{ cursor: "pointer" }}>Jobs</span>

        <span style={{ cursor: "pointer" }}>About</span>

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "10px 18px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            background: darkMode ? "#fbbf24" : "#1f2937",
            color: darkMode ? "#111827" : "white",
            fontWeight: "600",
          }}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;