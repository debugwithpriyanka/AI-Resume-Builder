function SkillsGapDashboard({ dashboard }) {
  if (!dashboard) return null;

  const cardStyle = {
    flex: 1,
    minWidth: "280px",
    background: "#ffffff",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    border: "1px solid #e5e7eb",
  };

  const headingStyle = {
    marginBottom: "15px",
    color: "#1f2937",
    fontSize: "18px",
    fontWeight: "600",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const itemStyle = {
    padding: "10px",
    marginBottom: "8px",
    borderRadius: "8px",
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          color: "#1f2937",
        }}
      >
        🎯 Skills Gap Dashboard
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Matched Skills */}
        <div style={cardStyle}>
          <h3 style={{ ...headingStyle, color: "#16a34a" }}>
            ✅ Matched Skills
          </h3>

          <ul style={listStyle}>
            {(dashboard.matched_skills || []).length > 0 ? (
              dashboard.matched_skills.map((skill, index) => (
                <li key={index} style={itemStyle}>
                  {skill}
                </li>
              ))
            ) : (
              <p>No matched skills found.</p>
            )}
          </ul>
        </div>

        {/* Missing Skills */}
        <div style={cardStyle}>
          <h3 style={{ ...headingStyle, color: "#dc2626" }}>
            ❌ Missing Skills
          </h3>

          <ul style={listStyle}>
            {(dashboard.missing_skills || []).length > 0 ? (
              dashboard.missing_skills.map((skill, index) => (
                <li key={index} style={itemStyle}>
                  {skill}
                </li>
              ))
            ) : (
              <p>No missing skills.</p>
            )}
          </ul>
        </div>

        {/* Certifications */}
        <div style={cardStyle}>
          <h3 style={{ ...headingStyle, color: "#2563eb" }}>
            📚 Recommended Certifications
          </h3>

          <ul style={listStyle}>
            {(dashboard.recommended_certifications || []).length > 0 ? (
              dashboard.recommended_certifications.map((cert, index) => (
                <li key={index} style={itemStyle}>
                  {cert}
                </li>
              ))
            ) : (
              <p>No recommendations available.</p>
            )}
          </ul>
        </div>
      </div>

      {/* Overall Feedback */}
      {dashboard.overall_feedback && (
        <div
          style={{
            marginTop: "25px",
            background: "#eff6ff",
            border: "1px solid #bfdbfe",
            borderRadius: "15px",
            padding: "20px",
          }}
        >
          <h3
            style={{
              color: "#1d4ed8",
              marginBottom: "10px",
            }}
          >
            💡 Overall Feedback
          </h3>

          <p
            style={{
              color: "#374151",
              lineHeight: "1.8",
            }}
          >
            {dashboard.overall_feedback}
          </p>
        </div>
      )}
    </div>
  );
}

export default SkillsGapDashboard;