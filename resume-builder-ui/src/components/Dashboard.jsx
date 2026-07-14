function Dashboard({ result }) {
  if (!result) return null;

  // Dummy values for now.
  // Later these will come from your backend.
  const atsScore = 92;
  const resumeScore = 90;
  const keywordScore = 88;
  const grammarScore = 96;

  const ProgressBar = ({ label, value, color }) => (
    <div
      style={{
        marginBottom: 25,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <strong>{label}</strong>

        <strong>{value}%</strong>
      </div>

      <div
        style={{
          width: "100%",
          height: 12,
          background: "#e5e7eb",
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            background: color,
            transition: ".8s",
          }}
        />
      </div>
    </div>
  );

  const Card = ({ title, value, color }) => (
    <div
      style={{
        flex: 1,
        minWidth: 220,
        background: "#fff",
        borderRadius: 18,
        padding: 25,
        boxShadow: "0 10px 25px rgba(0,0,0,.08)",
      }}
    >
      <h3
        style={{
          marginBottom: 15,
          color: "#374151",
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          color,
          fontSize: 42,
          margin: 0,
        }}
      >
        {value}%
      </h1>
    </div>
  );

  return (
    <div
      style={{
        marginTop: 40,
      }}
    >
      <h2
        style={{
          marginBottom: 25,
        }}
      >
        📊 AI Resume Dashboard
      </h2>

      {/* Top Cards */}

      <div
        style={{
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          marginBottom: 35,
        }}
      >
        <Card
          title="ATS Score"
          value={atsScore}
          color="#16a34a"
        />

        <Card
          title="Resume Score"
          value={resumeScore}
          color="#2563eb"
        />

        <Card
          title="Grammar"
          value={grammarScore}
          color="#9333ea"
        />

        <Card
          title="Keyword Match"
          value={keywordScore}
          color="#ea580c"
        />
      </div>

      {/* Progress */}

      <div
        style={{
          background: "#fff",
          padding: 30,
          borderRadius: 18,
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        }}
      >
        <h2
          style={{
            marginBottom: 25,
          }}
        >
          Performance Analysis
        </h2>

        <ProgressBar
          label="ATS Compatibility"
          value={atsScore}
          color="#16a34a"
        />

        <ProgressBar
          label="Resume Quality"
          value={resumeScore}
          color="#2563eb"
        />

        <ProgressBar
          label="Grammar"
          value={grammarScore}
          color="#9333ea"
        />

        <ProgressBar
          label="Keyword Match"
          value={keywordScore}
          color="#ea580c"
        />
      </div>
    </div>
  );
}

export default Dashboard;