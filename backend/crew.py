import os

from crewai import Crew, Process

from tasks import (
    resume_task,
    ats_task,
    dashboard_task,
    career_task,
    cover_letter_task,
    linkedin_task,
    interview_task,
)

INPUT_DIR = "inputs"


# =====================================================
# Read File
# =====================================================

def read_file(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()


# =====================================================
# Generate Resume
# =====================================================

async def generate_resume():

    student_profile = read_file(
        os.path.join(INPUT_DIR, "student_profile.txt")
    )

    job_description = read_file(
        os.path.join(INPUT_DIR, "job_description.txt")
    )

    shared_context = f"""

========================================
STUDENT PROFILE
========================================

{student_profile}

========================================
JOB DESCRIPTION
========================================

{job_description}

Instructions

• Use ONLY the above information.

• Never invent experience.

• Tailor every output to the Job Description.

• Keep outputs professional.

"""

    # Reset descriptions every request
    resume_task.description = (
        "Generate an ATS-friendly Resume.\n"
        + shared_context
    )

    ats_task.description = (
        "Review the Resume and generate ATS Report.\n"
        + shared_context
    )

    dashboard_task.description = (
        "Generate ONLY valid JSON dashboard.\n"
        + shared_context
    )

    career_task.description = (
        "Generate Career Improvement Plan.\n"
        + shared_context
    )

    cover_letter_task.description = (
        "Generate Professional Cover Letter.\n"
        + shared_context
    )

    linkedin_task.description = (
        "Generate LinkedIn Profile Content.\n"
        + shared_context
    )

    interview_task.description = (
        "Generate Interview Questions.\n"
        + shared_context
    )

    crew = Crew(

        tasks=[
            resume_task,
            ats_task,
            dashboard_task,
            career_task,
            cover_letter_task,
            linkedin_task,
            interview_task,
        ],

        process=Process.sequential,

        verbose=True,

        memory=False,

        cache=False,
    )

    print("\n==============================")
    print("Starting CrewAI...")
    print("==============================\n")

    result = await crew.kickoff_async()

    print("\n==============================")
    print("CrewAI Finished Successfully")
    print("==============================\n")

    return str(result)


# =====================================================
# Local Test
# =====================================================

if __name__ == "__main__":

    import asyncio

    asyncio.run(generate_resume())