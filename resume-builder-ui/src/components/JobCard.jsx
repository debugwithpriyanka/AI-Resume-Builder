function JobCard({ job }) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "16px",
        padding: "24px",
        marginTop: "20px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        border: "1px solid #e5e7eb",
        transition: "0.3s ease",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              color: "#1f2937",
              fontSize: "24px",
            }}
          >
            💼 {job.title}
          </h2>

          <p
            style={{
              margin: "8px 0",
              color: "#2563eb",
              fontWeight: "600",
              fontSize: "17px",
            }}
          >
            🏢 {job.company}
          </p>
        </div>

        <div
          style={{
            background: "#dcfce7",
            color: "#15803d",
            padding: "8px 18px",
            borderRadius: "25px",
            fontWeight: "bold",
            fontSize: "15px",
          }}
        >
            🎯 {job.match_score}% Match
        </div>
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid #e5e7eb",
          margin: "20px 0",
        }}
      />

      {/* Details */}

      <p
        style={{
          margin: "8px 0",
          color: "#4b5563",
          fontSize: "16px",
        }}
      >
        📍 <strong>Location:</strong> {job.location}
      </p>

      {job.salary && (
        <p
          style={{
            margin: "8px 0",
            color: "#4b5563",
          }}
        >
          💰 <strong>Salary:</strong> {job.salary}
        </p>
      )}

      {job.job_type && (
        <p
          style={{
            margin: "8px 0",
            color: "#4b5563",
          }}
        >
          🕒 <strong>Type:</strong> {job.job_type}
        </p>
      )}

      {job.description && (
        <p
          style={{
            marginTop: "20px",
            color: "#6b7280",
            lineHeight: "1.7",
          }}
        >
          {job.description}
        </p>
      )}

      {/* Button */}

      <div
        style={{
          marginTop: "25px",
          textAlign: "right",
        }}
      >
        <a
          href={job.apply_link}
          target="_blank"
          rel="noreferrer"
          style={{
            background: "#2563eb",
            color: "white",
            padding: "12px 24px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "600",
            display: "inline-block",
          }}
        >
          Apply Now →
        </a>
      </div>
    </div>
  );
}

export default JobCard;