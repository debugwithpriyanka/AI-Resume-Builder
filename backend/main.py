import os
import json
import shutil
import traceback

from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from crew import generate_resume
from job_search import search_jobs

app = FastAPI(title="AI Resume Builder API")

# =====================================================
# CORS
# =====================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

INPUT_DIR = "inputs"
OUTPUT_DIR = "output"

os.makedirs(INPUT_DIR, exist_ok=True)
os.makedirs(OUTPUT_DIR, exist_ok=True)


# =====================================================
# Helpers
# =====================================================

def read_output(filename):
    path = os.path.join(OUTPUT_DIR, filename)

    if not os.path.exists(path):
        print(f"{filename} not found.")
        return ""

    with open(path, "r", encoding="utf-8") as f:
        return f.read()


def read_dashboard():
    path = os.path.join(OUTPUT_DIR, "dashboard.json")

    default_dashboard = {
        "ats_score": 0,
        "resume_score": 0,
        "grammar_score": 0,
        "keyword_match": 0,
        "matched_skills": [],
        "missing_skills": [],
        "recommended_certifications": [],
        "overall_feedback": "Dashboard not generated."
    }

    if not os.path.exists(path):
        return default_dashboard

    try:
        with open(path, "r", encoding="utf-8") as f:
            content = f.read().strip()

        content = content.replace("```json", "")
        content = content.replace("```", "")
        content = content.strip()

        return json.loads(content)

    except Exception as e:
        print("Dashboard Parse Error")
        print(e)
        return default_dashboard


# =====================================================
# Home
# =====================================================

@app.get("/")
def home():
    return {
        "status": "Running",
        "project": "AI Resume Builder"
    }


# =====================================================
# Generate Resume
# =====================================================

@app.post("/generate-resume")
async def generate(
    student_profile: UploadFile = File(...),
    job_description: UploadFile = File(...)
):

    try:

        print("\nUploading files...")

        student_path = os.path.join(
            INPUT_DIR,
            "student_profile.txt"
        )

        job_path = os.path.join(
            INPUT_DIR,
            "job_description.txt"
        )

        with open(student_path, "wb") as buffer:
            shutil.copyfileobj(student_profile.file, buffer)

        with open(job_path, "wb") as buffer:
            shutil.copyfileobj(job_description.file, buffer)

        print("Files uploaded.")

        print("Starting CrewAI...")

        await generate_resume()

        print("CrewAI Finished.")

        response = {
            "success": True,

            "resume": read_output("resume.md"),

            "ats_report": read_output("ats_report.md"),

            "dashboard": read_dashboard(),

            "improvement_plan": read_output("improvement_plan.md"),

            "cover_letter": read_output("cover_letter.md"),

            "linkedin_about": read_output("linkedin_about.md"),

            "interview_questions": read_output("interview_questions.md"),

            "jobs": search_jobs()
        }

        print("Returning Response")

        return response

    except Exception as e:

        print("\nBACKEND ERROR\n")

        traceback.print_exc()

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


# =====================================================
# Download
# =====================================================

@app.get("/download/{filename}")
def download(filename: str):

    content = read_output(filename)

    if content == "":
        raise HTTPException(
            status_code=404,
            detail="File not found"
        )

    return {
        "filename": filename,
        "content": content
    }


# =====================================================
# Jobs
# =====================================================

@app.get("/jobs")
def jobs():
    return {
        "jobs": search_jobs()
    }