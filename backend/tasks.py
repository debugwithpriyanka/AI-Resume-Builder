from crewai import Task
from agents import (
    resume_writer,
    ats_reviewer,
    career_coach,
    cover_letter_writer,
    linkedin_writer,
    interview_generator
)

resume_task = Task(
    description="""
Using the student profile and job description, generate an ATS-friendly resume.
""",
    expected_output="Professional Resume",
    agent=resume_writer,
    output_file="output/resume.md"
)

ats_task = Task(
    description="""
Review the generated resume.

Generate:
- ATS Score
- Keyword Match
- Missing Keywords
- Strengths
- Weaknesses
- Suggestions
""",
    expected_output="ATS Report",
    agent=ats_reviewer,
    context=[resume_task],
    output_file="output/ats_report.md"
)

career_task = Task(
    description="""
Generate a career improvement roadmap.
""",
    expected_output="Improvement Plan",
    agent=career_coach,
    context=[resume_task, ats_task],
    output_file="output/improvement_plan.md"
)

cover_letter_task = Task(
    description="""
Generate a professional cover letter.
""",
    expected_output="Cover Letter",
    agent=cover_letter_writer,
    context=[resume_task],
    output_file="output/cover_letter.md"
)

linkedin_task = Task(
    description="""
Generate LinkedIn About section.
""",
    expected_output="LinkedIn About",
    agent=linkedin_writer,
    context=[resume_task],
    output_file="output/linkedin_about.md"
)

interview_task = Task(
    description="""
Generate technical and HR interview questions.
""",
    expected_output="Interview Questions",
    agent=interview_generator,
    context=[resume_task],
    output_file="output/interview_questions.md"
)