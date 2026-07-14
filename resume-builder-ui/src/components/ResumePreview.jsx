function ResumePreview({ resume }) {
  if (!resume) return null;

  return (
    <div
      style={{
        background: "#fff",
        padding: 40,
        borderRadius: 20,
        boxShadow: "0 15px 35px rgba(0,0,0,.08)",
        marginTop: 40,
        border: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 25,
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#1f2937",
          }}
        >
          📄 Resume Preview
        </h2>

        <span
          style={{
            background: "#dbeafe",
            color: "#2563eb",
            padding: "8px 16px",
            borderRadius: 20,
            fontWeight: 600,
          }}
        >
          ATS Friendly
        </span>
      </div>

      <div
        style={{
          background: "#fafafa",
          borderRadius: 15,
          padding: 30,
          border: "1px solid #ddd",
          maxHeight: "700px",
          overflowY: "auto",
          whiteSpace: "pre-wrap",
          lineHeight: 1.8,
          color: "#374151",
          fontFamily: "Arial",
        }}
      >
        {resume}
      </div>
    </div>
  );
}

export default ResumePreview;