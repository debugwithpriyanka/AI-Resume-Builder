function LoadingScreen() {
  const steps = [
    "📄 Reading Student Profile...",
    "💼 Reading Job Description...",
    "🤖 Resume Writer Agent Working...",
    "📊 ATS Reviewer Analyzing Resume...",
    "🎯 Career Coach Generating Roadmap...",
    "✉️ Creating Cover Letter...",
    "💬 Optimizing LinkedIn Profile...",
    "🎤 Preparing Interview Questions...",
    "🔍 Searching Matching Jobs...",
    "✅ Almost Done...",
  ];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "850px",
        margin: "40px auto",
        background: "#fff",
        borderRadius: 20,
        padding: 40,
        boxShadow: "0 15px 35px rgba(0,0,0,.08)",
        border: "1px solid #e5e7eb",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: 10,
          color: "#2563eb",
        }}
      >
        🤖 AI Resume Builder
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#6b7280",
          marginBottom: 35,
        }}
      >
        Our AI agents are creating your personalized resume...
      </p>

      {steps.map((step, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 15,
            marginBottom: 18,
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              border: "3px solid #2563eb",
              borderTop: "3px solid transparent",
              animation: "spin 1s linear infinite",
            }}
          />

          <span
            style={{
              color: "#374151",
              fontSize: 16,
            }}
          >
            {step}
          </span>
        </div>
      ))}

      <div
        style={{
          marginTop: 35,
        }}
      >
        <div
          style={{
            height: 12,
            background: "#e5e7eb",
            borderRadius: 30,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(90deg,#2563eb,#60a5fa)",
              animation: "loading 2s infinite",
            }}
          />
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: 15,
            color: "#6b7280",
          }}
        >
          Please wait while AI generates your documents...
        </p>
      </div>

      <style>
        {`
          @keyframes spin {
            from{
              transform:rotate(0deg);
            }
            to{
              transform:rotate(360deg);
            }
          }

          @keyframes loading{
            0%{
              transform:translateX(-100%);
            }

            100%{
              transform:translateX(100%);
            }
          }
        `}
      </style>
    </div>
  );
}

export default LoadingScreen;