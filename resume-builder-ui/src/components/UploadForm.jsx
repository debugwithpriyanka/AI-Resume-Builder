import { useState } from "react";
import API from "../services/api";

function UploadForm({ setResult }) {
  const [profile, setProfile] = useState(null);
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!profile || !job) {
      alert("Please upload both files.");
      return;
    }

    const formData = new FormData();
    formData.append("student_profile", profile);
    formData.append("job_description", job);

    try {
      setLoading(true);

      const res = await API.post("/generate-resume", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to generate resume.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        marginTop: 30,
        display: "flex",
        flexDirection: "column",
        gap: 15,
      }}
    >
      <label>
        Student Profile
        <input
          type="file"
          accept=".txt"
          onChange={(e) => setProfile(e.target.files[0])}
        />
      </label>

      <label>
        Job Description
        <input
          type="file"
          accept=".txt"
          onChange={(e) => setJob(e.target.files[0])}
        />
      </label>

      <button
        onClick={handleSubmit}
        style={{
          padding: 12,
          background: "#2563eb",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: 8,
        }}
      >
        {loading ? "Generating..." : "Generate Resume"}
      </button>
    </div>
  );
}

export default UploadForm;