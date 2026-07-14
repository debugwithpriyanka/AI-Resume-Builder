import { useState } from "react";
import Navbar from "./components/Navbar";
import UploadForm from "./components/UploadForm";
import ResultCard from "./components/ResultCard";

function App() {
  const [result, setResult] = useState(null);

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
          </>
        )}
      </div>
    </>
  );
}

export default App;