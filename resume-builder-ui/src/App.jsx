import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UploadForm from "./components/UploadForm";
import LoadingScreen from "./components/LoadingScreen";
import Dashboard from "./components/Dashboard";
import SkillsGapDashboard from "./components/SkillsGapDashboard";
import ResumePreview from "./components/ResumePreview";
import ResultTabs from "./components/ResultTabs";
import JobCard from "./components/JobCard";

function App() {

  const [result, setResult] = useState(null);

  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] = useState(false);

  return (
    <>

      <Navbar />

      <Hero />

      <div
        style={{
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "20px",
        }}
      >

        <UploadForm
          setResult={setResult}
          setJobs={setJobs}
          loading={loading}
          setLoading={setLoading}
        />

        {loading && <LoadingScreen />}

        {!loading && result && (
          <>

            <Dashboard
              dashboard={result.dashboard}
            />

            <SkillsGapDashboard
              dashboard={result.dashboard}
            />

            <ResumePreview
              resume={result.resume}
            />

            <ResultTabs
              result={result}
            />

            <div
              style={{
                marginTop: 50,
              }}
            >
              <h2
                style={{
                  marginBottom: 25,
                  color: "#1f2937",
                }}
              >
                💼 Recommended Jobs
              </h2>

              {jobs.length > 0 ? (
                jobs.map((job, index) => (
                  <JobCard
                    key={index}
                    job={job}
                  />
                ))
              ) : (
                <div
                  style={{
                    background: "#fff",
                    padding: 25,
                    borderRadius: 15,
                    textAlign: "center",
                    boxShadow:
                      "0 5px 20px rgba(0,0,0,.08)",
                  }}
                >
                  No Jobs Found
                </div>
              )}
            </div>

          </>
        )}

      </div>

    </>
  );
}

export default App;