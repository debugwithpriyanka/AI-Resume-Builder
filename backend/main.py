from fastapi.concurrency import run_in_threadpool
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os

from crew import generate_resume
from job_search import search_jobs

app = FastAPI(title="AI Resume Builder API")

# Allow React Frontend
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


@app.get("/")
def home():
    return {
        "message": "AI Resume Builder Backend Running Successfully!"
    }


@app.post("/generate-resume")
async def generate(
    student_profile: UploadFile = File(...),
    job_description: UploadFile = File(...)
):

    # Save uploaded files
    student_path = os.path.join(INPUT_DIR, "student_profile.txt")
    jd_path = os.path.join(INPUT_DIR, "job_description.txt")

    with open(student_path, "wb") as buffer:
        shutil.copyfileobj(student_profile.file, buffer)

    with open(jd_path, "wb") as buffer:
        shutil.copyfileobj(job_description.file, buffer)

    # Run CrewAI
    await run_in_threadpool(generate_resume)

    # Read generated files
    def read_output(file):
        path = os.path.join(OUTPUT_DIR, file)
        if os.path.exists(path):
            with open(path, "r", encoding="utf-8") as f:
                return f.read()
        return ""

    return {
        "resume": read_output("resume.md"),
        "ats_report": read_output("ats_report.md"),
        "improvement_plan": read_output("improvement_plan.md"),
        "cover_letter": read_output("cover_letter.md"),
        "linkedin_about": read_output("linkedin_about.md"),
        "interview_questions": read_output("interview_questions.md"),
    }


@app.get("/download/{filename}")
def download(filename: str):
    path = os.path.join(OUTPUT_DIR, filename)

    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            return {"content": f.read()}

@app.get("/jobs")
def jobs():

    return {"jobs":search_jobs()}

    return {"error": "File not found"}