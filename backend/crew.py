import os

from crewai import Crew, Process

from tasks import (
    resume_task,
    ats_task,
    career_task,
    cover_letter_task,
    linkedin_task,
    interview_task,
)

INPUT_DIR = "inputs"


def read(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()


async def generate_resume():

    student = read(os.path.join(INPUT_DIR, "student_profile.txt"))

    jd = read(os.path.join(INPUT_DIR, "job_description.txt"))

    extra = f"""

Student Profile

{student}

Job Description

{jd}

Use ONLY this information while completing every task.
"""

    resume_task.description += extra

    crew = Crew(
        tasks=[
            resume_task,
            ats_task,
            career_task,
            cover_letter_task,
            linkedin_task,
            interview_task,
        ],
        process=Process.sequential,
        verbose=True,
    )

    result = await crew.kickoff_async()

    return str(result)


if __name__ == "__main__":

    print(generate_resume())

    print("\nCompleted Successfully")