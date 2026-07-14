import json
import os
import shutil

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

# =====================================================
# Directories
# =====================================================

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
        return ""

    with open(path, "r", encoding="utf-8") as f:
        return f.read()


def read_json(filename):
    path = os.path.join(OUTPUT_DIR, filename)

    if not os.path.exists(path):
        return {}

    try:
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)

    except Exception:
        return {}

# =====================================================
# Home
# =====================================================

@app.get("/")
def home():
    return {
        "status": "Running",
        "project": "AI Resume Builder",
        "version": "2.0"
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

        student_path = os.path.join(
            INPUT_DIR,
            "student_profile.txt"
        )

        job_path = os.path.join(
            INPUT_DIR,
            "job_description.txt"
        )

        # Save uploaded files

        with open(student_path, "wb") as buffer:
            shutil.copyfileobj(student_profile.file, buffer)

        with open(job_path, "wb") as buffer:
            shutil.copyfileobj(job_description.file, buffer)

        # Run CrewAI
        await generate_resume()

        # Response

        return {

            "success": True,

            "resume": read_output("resume.md"),

            "ats_report": read_output("ats_report.md"),

            "dashboard": read_json("dashboard.json"),

            "improvement_plan": read_output(
                "improvement_plan.md"
            ),

            "cover_letter": read_output(
                "cover_letter.md"
            ),

            "linkedin_about": read_output(
                "linkedin_about.md"
            ),

            "interview_questions": read_output(
                "interview_questions.md"
            ),

            "jobs": search_jobs()
        }

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )

# =====================================================
# Download Files
# =====================================================

@app.get("/download/{filename}")
def download(filename: str):

    content = read_output(filename)

    if not content:
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