import { useState } from "react";

function ResultTabs({ result }) {
  const [activeTab, setActiveTab] = useState("resume");

  if (!result) return null;

  const tabs = [
    {
      id: "resume",
      label: "📄 Resume",
      content: result.resume,
    },
    {
      id: "ats",
      label: "📊 ATS Report",
      content: result.ats_report,
    },
    {
      id: "improvement",
      label: "🚀 Improvement",
      content: result.improvement_plan,
    },
    {
      id: "cover",
      label: "💼 Cover Letter",
      content: result.cover_letter,
    },
    {
      id: "linkedin",
      label: "💬 LinkedIn",
      content: result.linkedin_about,
    },
    {
      id: "interview",
      label: "🎤 Interview",
      content: result.interview_questions,
    },
  ];

  const active = tabs.find((tab) => tab.id === activeTab);

  return (
    <div
      style={{
        marginTop: 40,
        background: "#fff",
        borderRadius: 20,
        boxShadow: "0 12px 30px rgba(0,0,0,.08)",
        overflow: "hidden",
      }}
    >
      {/* Tabs */}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              minWidth: 150,
              padding: 18,
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 15,
              background:
                activeTab === tab.id ? "#2563eb" : "#fff",
              color:
                activeTab === tab.id ? "#fff" : "#374151",
              transition: ".3s",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}

      <div
        style={{
          padding: 30,
          maxHeight: 700,
          overflowY: "auto",
          whiteSpace: "pre-wrap",
          lineHeight: 1.8,
          color: "#374151",
          fontSize: 15,
        }}
      >
        {active?.content || "No content available"}
      </div>
    </div>
  );
}

export default ResultTabs;