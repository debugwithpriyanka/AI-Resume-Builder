import { useState } from "react";
import {
  FaCopy,
  FaDownload,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

function ResultCard({ title, content }) {
  const [expanded, setExpanded] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText(content);
    alert(`${title} copied!`);
  };

  const downloadText = () => {
    const blob = new Blob([content], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = `${title}.txt`;

    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        marginTop: 25,
        boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        overflow: "hidden",
      }}
    >
      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#2563eb",
          color: "white",
          padding: "18px 25px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: 22,
          }}
        >
            {title}
        </h2>

        <div
          style={{
            display: "flex",
            gap: 18,
            cursor: "pointer",
            fontSize: 18,
          }}
        >
          <FaCopy onClick={copyText} />

          <FaDownload onClick={downloadText} />

          {expanded ? (
            <FaChevronUp
              onClick={() => setExpanded(false)}
            />
          ) : (
            <FaChevronDown
              onClick={() => setExpanded(true)}
            />
          )}
        </div>
      </div>

      {/* Content */}

      <div
        style={{
          padding: 25,
          maxHeight: expanded ? "none" : 250,
          overflow: "auto",
          whiteSpace: "pre-wrap",
          lineHeight: 1.8,
          fontSize: 16,
          color: "#374151",
        }}
      >
        {content}
      </div>

      {/* Footer */}

      <div
        style={{
          borderTop: "1px solid #eee",
          padding: "12px 25px",
          color: "#6b7280",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 14,
        }}
      >
        <span>
          {content.length} Characters
        </span>

        <span>
          AI Generated
        </span>
      </div>
    </div>
  );
}

export default ResultCard;