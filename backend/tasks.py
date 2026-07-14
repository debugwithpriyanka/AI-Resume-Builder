from crewai import Task
from agents import (
    resume_writer,
    ats_reviewer,
    career_coach,
    cover_letter_writer,
    linkedin_writer,
    interview_generator,
    dashboard_analyst,
)

# =====================================================
# Resume Generation
# =====================================================

resume_task = Task(
    description="""
You are given a student's profile and a target job description.

Create a professional ATS-friendly resume.

Requirements:

1. Professional Header
2. Career Summary
3. Technical Skills
4. Soft Skills
5. Education
6. Projects
7. Experience (if available)
8. Certifications
9. Achievements
10. Languages
11. Interests

Rules:

- Use Markdown.
- Optimize according to the Job Description.
- Use ATS-friendly formatting.
- Include important keywords naturally.
- Keep the resume professional and concise.
""",
    expected_output="Professional ATS-Friendly Resume in Markdown",
    agent=resume_writer,
    output_file="output/resume.md",
)

# =====================================================
# ATS Report
# =====================================================

ats_task = Task(
    description="""
Review the generated resume like a professional ATS system.

Generate a detailed report including:

# ATS Score (/100)

# Resume Score (/100)

# Grammar Analysis

# Keyword Match

# Strengths

# Weaknesses

# Missing Keywords

# Missing Skills

# Formatting Review

# Final Verdict

Write the report in Markdown.

Be constructive and professional.
""",
    expected_output="Detailed ATS Report",
    agent=ats_reviewer,
    context=[resume_task],
    output_file="output/ats_report.md",
)

# =====================================================
# Dashboard JSON
# =====================================================

dashboard_task = Task(
    description="""
Analyze the Resume and ATS Report.

Return ONLY valid JSON.

No markdown.
No explanation.

Output exactly like this:

{
    "ats_score": 92,
    "resume_score": 90,
    "grammar_score": 95,
    "keyword_match": 88,

    "matched_skills": [
        "React",
        "Python",
        "Git"
    ],

    "missing_skills": [
        "Docker",
        "AWS",
        "CI/CD"
    ],

    "recommended_certifications": [
        "AWS Certified Cloud Practitioner",
        "Docker Certified Associate"
    ],

    "overall_feedback":
    "Short professional feedback."
}

IMPORTANT

Return valid JSON only.

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
Create a detailed career improvement roadmap.

Include:

1. Missing Skills
2. Learning Roadmap
3. Recommended Certifications
4. Recommended Courses
5. GitHub Improvements
6. Portfolio Improvements
7. Recommended Projects
8. Interview Preparation Tips
9. Career Growth Advice

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
Write a personalized one-page cover letter.

Include:

- Greeting
- Introduction
- Why the candidate is suitable
- Relevant skills
- Projects
- Closing paragraph

Professional tone.

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
Generate:

1. Professional LinkedIn Headline

2. LinkedIn About Section

3. Top Skills

4. Featured Projects

5. Open To Work Caption

Use Markdown.
""",
    expected_output="LinkedIn Profile Content",
    agent=linkedin_writer,
    context=[resume_task],
    output_file="output/linkedin_about.md",
)

# =====================================================
# Interview Questions
# =====================================================

interview_task = Task(
    description="""
Generate interview preparation content.

Include:

10 HR Questions

10 Technical Questions

5 Coding Questions

5 Scenario-Based Questions

Provide model answers.

Difficulty:

Easy

Medium

Hard

Use Markdown.
""",
    expected_output="Interview Preparation Guide",
    agent=interview_generator,
    context=[resume_task],
    output_file="output/interview_questions.md",
)

# =====================================================
# Dummy Job Search
# (Later we'll replace this with a real Jobs API)
# =====================================================

def search_jobs():
    return [
        {
            "company": "Google",
            "title": "Python Developer",
            "location": "Bangalore",
            "match_score": 95,
            "apply_link": "https://careers.google.com",
        },
        {
            "company": "Microsoft",
            "title": "AI Engineer",
            "location": "Hyderabad",
            "match_score": 92,
            "apply_link": "https://careers.microsoft.com",
        },
        {
            "company": "Amazon",
            "title": "Software Development Engineer",
            "location": "Chennai",
            "match_score": 89,
            "apply_link": "https://amazon.jobs",
        },
    ]