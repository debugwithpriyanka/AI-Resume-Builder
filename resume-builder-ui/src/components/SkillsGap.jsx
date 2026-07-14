function SkillsGap({ result }) {
  if (!result) return null;

  // Dummy data for now.
  // Later we'll get these from the backend.
  const matchedSkills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Python",
    "Git",
  ];

  const missingSkills = [
    "Docker",
    "AWS",
    "Kubernetes",
    "CI/CD",
  ];

  const certifications = [
    "AWS Certified Cloud Practitioner",
    "Docker Certified Associate",
    "Google Associate Cloud Engineer",
  ];

  return (
    <div
      style={{
        marginTop: 40,
        background: "#fff",
        borderRadius: 20,
        padding: 30,
        boxShadow: "0 10px 25px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          marginBottom: 25,
        }}
      >
        🎯 Skills Gap Dashboard
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: 25,
        }}
      >
        {/* Matched */}

        <div>
          <h3
            style={{
              color: "#16a34a",
              marginBottom: 15,
            }}
          >
            ✅ Matched Skills
          </h3>

          {matchedSkills.map((skill, index) => (
            <div
              key={index}
              style={{
                background: "#dcfce7",
                color: "#166534",
                padding: 12,
                borderRadius: 8,
                marginBottom: 10,
              }}
            >
              ✔ {skill}
            </div>
          ))}
        </div>

        {/* Missing */}

        <div>
          <h3
            style={{
              color: "#dc2626",
              marginBottom: 15,
            }}
          >
            ❌ Missing Skills
          </h3>

          {missingSkills.map((skill, index) => (
            <div
              key={index}
              style={{
                background: "#fee2e2",
                color: "#991b1b",
                padding: 12,
                borderRadius: 8,
                marginBottom: 10,
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: 35,
        }}
      >
        <h3
          style={{
            marginBottom: 15,
          }}
        >
          🎓 Recommended Certifications
        </h3>

        {certifications.map((cert, index) => (
          <div
            key={index}
            style={{
              padding: 14,
              marginBottom: 10,
              background: "#eff6ff",
              borderLeft: "5px solid #2563eb",
              borderRadius: 8,
            }}
          >
            {cert}
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 35,
        }}
      >
        <h3
          style={{
            marginBottom: 15,
          }}
        >
          📈 Overall Skill Match
        </h3>

        <div
          style={{
            width: "100%",
            height: 18,
            background: "#e5e7eb",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "75%",
              height: "100%",
              background: "#2563eb",
            }}
          />
        </div>

        <h2
          style={{
            marginTop: 15,
            color: "#2563eb",
          }}
        >
          75% Match
        </h2>
      </div>
    </div>
  );
}

export default SkillsGap;