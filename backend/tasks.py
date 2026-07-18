from crewai import Task

from agents import (
    resume_writer,
    ats_reviewer,
    dashboard_analyst,
    career_coach,
    cover_letter_writer,
    linkedin_writer,
    interview_generator,
)

# =====================================================
# Resume Generation
# =====================================================

resume_task = Task(
    description="""
Generate a professional ATS-friendly resume.

Requirements

- Professional Header
- Career Summary
- Technical Skills
- Soft Skills
- Education
- Projects
- Experience (if available)
- Certifications
- Achievements
- Languages
- Interests

Use Markdown.

Optimize according to the Job Description.

Never invent experience.
""",
    expected_output="Professional ATS Resume",
    agent=resume_writer,
    output_file="output/resume.md",
)

# =====================================================
# ATS Report
# =====================================================

ats_task = Task(
    description="""
Review the generated resume.

Generate

- ATS Score (/100)
- Resume Score (/100)
- Grammar Score
- Keyword Match
- Strengths
- Weaknesses
- Missing Skills
- Missing Keywords
- Formatting Review
- Final Suggestions

Return in Markdown.
""",
    expected_output="ATS Report",
    agent=ats_reviewer,
    context=[resume_task],
    output_file="output/ats_report.md",
)

# =====================================================
# Dashboard JSON
# =====================================================

dashboard_task = Task(
    description="""
Read the Resume and ATS Report.

Return ONLY valid JSON.

Do NOT use markdown.

Do NOT wrap inside ```json

Return ONLY this structure.

{
    "ats_score":90,
    "resume_score":88,
    "grammar_score":95,
    "keyword_match":84,

    "matched_skills":[
        "Python",
        "React",
        "Git"
    ],

    "missing_skills":[
        "Docker",
        "AWS",
        "CI/CD"
    ],

    "recommended_certifications":[
        "AWS CCP",
        "Docker Associate"
    ],

    "overall_feedback":"Professional feedback."
}

VERY IMPORTANT

Return JSON ONLY.

No explanation.

No markdown.

No extra text.
""",
    expected_output="Dashboard JSON",
    agent=dashboard_analyst,
    context=[resume_task, ats_task],
    output_file="output/dashboard.json",
)

# =====================================================
# Career Improvement Plan
# =====================================================

career_task = Task(
    description="""
Generate a Career Improvement Plan.

Include

1. Missing Skills

2. Learning Roadmap

3. Certifications

4. Online Courses

5. Portfolio Improvements

6. GitHub Improvements

7. Resume Improvements

8. Interview Preparation

9. Career Advice

Use Markdown.
""",
    expected_output="Career Improvement Plan",
    agent=career_coach,
    context=[resume_task, ats_task],
    output_file="output/improvement_plan.md",
)

# =====================================================
# Cover Letter
# =====================================================

cover_letter_task = Task(
    description="""
Generate a professional one-page Cover Letter.

Include

Greeting

Introduction

Relevant Skills

Projects

Why suitable

Closing

Use Markdown.
""",
    expected_output="Professional Cover Letter",
    agent=cover_letter_writer,
    context=[resume_task],
    output_file="output/cover_letter.md",
)

# =====================================================
# LinkedIn About
# =====================================================

linkedin_task = Task(
    description="""
Generate

Professional Headline

LinkedIn About

Top Skills

Featured Projects

Open To Work Caption

Use Markdown.
""",
    expected_output="LinkedIn Content",
    agent=linkedin_writer,
    context=[resume_task],
    output_file="output/linkedin_about.md",
)

# =====================================================
# Interview Questions
# =====================================================

interview_task = Task(
    description="""
Generate

10 HR Questions

10 Technical Questions

5 Coding Questions

5 Scenario Questions

Provide model answers.

Difficulty

Easy

Medium

Hard

Use Markdown.
""",
    expected_output="Interview Questions",
    agent=interview_generator,
    context=[resume_task],
    output_file="output/interview_questions.md",
)