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
# Read Input Files
# =====================================================

def read_file(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()


# =====================================================
# Generate Resume Workflow
# =====================================================

async def generate_resume():

    # Read uploaded files
    student_profile = read_file(
        os.path.join(INPUT_DIR, "student_profile.txt")
    )

    job_description = read_file(
        os.path.join(INPUT_DIR, "job_description.txt")
    )

    # Shared context for every task
    shared_context = f"""

==============================
STUDENT PROFILE
==============================

{student_profile}

==============================
JOB DESCRIPTION
==============================

{job_description}

Instructions:

- Use ONLY the above information.
- Do not invent experience.
- Optimize every output for the Job Description.
- Keep all outputs professional.
"""

    # Add context to every task
    # (avoids each agent working without knowing the input)

    resume_task.description += shared_context
    ats_task.description += shared_context
    dashboard_task.description += shared_context
    career_task.description += shared_context
    cover_letter_task.description += shared_context
    linkedin_task.description += shared_context
    interview_task.description += shared_context

    # =====================================================
    # Crew
    # =====================================================

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
    )

    result = await crew.kickoff_async()

    return result


# =====================================================
# Local Testing
# =====================================================

if __name__ == "__main__":

    import asyncio

    asyncio.run(generate_resume())

    print("\n✅ Resume Generation Completed Successfully")