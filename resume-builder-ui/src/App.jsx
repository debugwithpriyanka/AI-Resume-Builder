import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UploadForm from "./components/UploadForm";
import LoadingScreen from "./components/LoadingScreen";
import Dashboard from "./components/Dashboard";
import SkillsGapDashboard from "./components/SkillsGapDashboard";
import ResumePreview from "./components/ResumePreview";
import ResultTabs from "./components/ResultTabs";
import JobCard from "./components/JobCard";

import API from "./services/api";

function App() {
  const [result, setResult] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

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

      <Hero />

      <div
        style={{
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        {/* Upload */}

        <UploadForm
          setResult={setResult}
          setLoading={setLoading}
        />

        {/* AI Loading */}

        {loading && <LoadingScreen />}

        {/* Generated Result */}

        {!loading && result && (
          <>
            {/* Dashboard */}

            <Dashboard dashboard={result.dashboard} />

            {/* Skills Gap */}

            <SkillsGapDashboard dashboard={result.dashboard} />

            {/* Resume */}

            <ResumePreview
              resume={result.resume}
            />

            {/* Tabs */}

            <ResultTabs result={result} />

            {/* Jobs */}

            <div
              style={{
                marginTop: 50,
              }}
            >
              <h2
                style={{
                  marginBottom: 20,
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
                <p>No jobs available.</p>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;