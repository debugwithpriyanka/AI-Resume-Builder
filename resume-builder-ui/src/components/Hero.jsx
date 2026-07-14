function Hero() {
  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "50px auto",
        padding: "50px",
        borderRadius: "20px",
        background: "linear-gradient(135deg,#2563eb,#4f46e5)",
        color: "#fff",
        textAlign: "center",
        boxShadow: "0 15px 40px rgba(0,0,0,.15)",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "20px",
          fontWeight: "700",
        }}
      >
        🤖 AI Resume Builder
      </h1>

      <p
        style={{
          fontSize: "20px",
          lineHeight: "1.8",
          maxWidth: "750px",
          margin: "0 auto",
        }}
      >
        Build an ATS-friendly Resume, Cover Letter, LinkedIn About section,
        Interview Questions, and discover matching jobs—all powered by AI.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,.15)",
            padding: "15px 25px",
            borderRadius: "12px",
          }}
        >
          📄 ATS Resume
        </div>

        <div
          style={{
            background: "rgba(255,255,255,.15)",
            padding: "15px 25px",
            borderRadius: "12px",
          }}
        >
          ✉️ Cover Letter
        </div>

        <div
          style={{
            background: "rgba(255,255,255,.15)",
            padding: "15px 25px",
            borderRadius: "12px",
          }}
        >
          💼 Job Matching
        </div>

        <div
          style={{
            background: "rgba(255,255,255,.15)",
            padding: "15px 25px",
            borderRadius: "12px",
          }}
        >
          🎯 ATS Analysis
        </div>
      </div>
    </section>
  );
}

export default Hero;