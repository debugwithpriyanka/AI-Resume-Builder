import { useState } from "react";
import { FaCloudUploadAlt, FaTrash } from "react-icons/fa";
import API from "../services/api";

function UploadForm({ setResult }) {
  const [profile, setProfile] = useState(null);
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);

  const [dragProfile, setDragProfile] = useState(false);
  const [dragJob, setDragJob] = useState(false);

  const handleDrop = (e, type) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    if (!file) return;

    if (type === "profile") {
      setProfile(file);
      setDragProfile(false);
    } else {
      setJob(file);
      setDragJob(false);
    }
  };

  const removeFile = (type) => {
    if (type === "profile") {
      setProfile(null);
    } else {
      setJob(null);
    }
  };

  const handleSubmit = async () => {
    if (!profile || !job) {
      alert("Upload both files.");
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
      console.log(err);
      alert("Generation failed.");
    } finally {
      setLoading(false);
    }
  };

  const UploadBox = ({
    title,
    file,
    setFile,
    drag,
    setDrag,
    id,
    type,
  }) => (
    <>
      <h3
        style={{
          marginBottom: 10,
          color: "#374151",
        }}
      >
        {title}
      </h3>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDrag(true);
        }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => handleDrop(e, type)}
        style={{
          border: drag
            ? "3px solid #2563eb"
            : "2px dashed #cbd5e1",
          borderRadius: 15,
          padding: 35,
          background: drag ? "#eff6ff" : "#fafafa",
          textAlign: "center",
          transition: ".3s",
          cursor: "pointer",
        }}
      >
        <input
          id={id}
          type="file"
          hidden
          accept=".txt,.pdf,.doc,.docx"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <label htmlFor={id} style={{ cursor: "pointer" }}>
          <FaCloudUploadAlt
            size={50}
            color="#2563eb"
          />

          <h3>Drag & Drop</h3>

          <p>or Click to Browse</p>

          <small>
            PDF • DOCX • TXT
          </small>
        </label>

        {file && (
          <div
            style={{
              marginTop: 20,
              padding: 15,
              background: "#fff",
              borderRadius: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow:
                "0 5px 15px rgba(0,0,0,.08)",
            }}
          >
            <div>
              <strong>{file.name}</strong>

              <br />

              <small>
                {(file.size / 1024).toFixed(2)} KB
              </small>
            </div>

            <FaTrash
              color="red"
              style={{ cursor: "pointer" }}
              onClick={() => removeFile(type)}
            />
          </div>
        )}
      </div>
    </>
  );

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "40px auto",
        padding: 35,
        borderRadius: 20,
        background: "#fff",
        boxShadow: "0 10px 25px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: 30,
        }}
      >
        📄 Upload Documents
      </h2>

      <UploadBox
        title="👤 Student Profile"
        file={profile}
        setFile={setProfile}
        drag={dragProfile}
        setDrag={setDragProfile}
        id="profile"
        type="profile"
      />

      <div style={{ height: 25 }} />

      <UploadBox
        title="💼 Job Description"
        file={job}
        setFile={setJob}
        drag={dragJob}
        setDrag={setDragJob}
        id="job"
        type="job"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          marginTop: 35,
          width: "100%",
          padding: 16,
          border: "none",
          borderRadius: 12,
          background: "#2563eb",
          color: "#fff",
          fontSize: 18,
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {loading
          ? "🤖 AI is Building Resume..."
          : "🚀 Generate Resume"}
      </button>
    </div>
  );
}

export default UploadForm;