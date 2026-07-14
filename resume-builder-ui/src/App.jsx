import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import UploadForm from "./components/UploadForm";
import ResultCard from "./components/ResultCard";
import JobCard from "./components/JobCard";
import API from "./services/api";

function App() {
  const [result, setResult] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await API.get("/jobs");
        setJobs(res.data.jobs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "1000px",
          margin: "30px auto",
          padding: "20px",
        }}
      >
        <UploadForm setResult={setResult} />

        {result && (
          <>
            <h2 style={{ marginTop: "30px" }}>
              Generated Documents
            </h2>

            <ResultCard
              title="Resume"
              content={result.resume}
            />

            <ResultCard
              title="ATS Report"
              content={result.ats_report}
            />

            <ResultCard
              title="Improvement Plan"
              content={result.improvement_plan}
            />

            <ResultCard
              title="Cover Letter"
              content={result.cover_letter}
            />

            <ResultCard
              title="LinkedIn About"
              content={result.linkedin_about}
            />

            <ResultCard
              title="Interview Questions"
              content={result.interview_questions}
            />

            <h2 style={{ marginTop: "40px" }}>
              Recommended Jobs
            </h2>

            {jobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default App;