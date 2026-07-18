from crewai import Agent, LLM

# =====================================================
# LLM Configuration
# =====================================================

llm = LLM(
    model="ollama/llama3",
    base_url="http://localhost:11434",
    temperature=0.2,
)

# =====================================================
# Resume Writer
# =====================================================

resume_writer = Agent(
    role="Senior Resume Writer",
    goal="""
Generate an ATS-friendly professional resume
tailored to the provided job description.
""",
    backstory="""
You are a professional resume writer with years of
experience creating resumes that successfully pass
Applicant Tracking Systems (ATS) and impress recruiters.
""",
    llm=llm,
    verbose=True,
)

# =====================================================
# ATS Reviewer
# =====================================================

ats_reviewer = Agent(
    role="ATS Resume Reviewer",
    goal="""
Evaluate resumes exactly like a modern Applicant
Tracking System.
""",
    backstory="""
You are an ATS specialist. You analyze formatting,
keywords, readability, grammar and resume quality.
""",
    llm=llm,
    verbose=True,
)

# =====================================================
# Dashboard Analyst
# =====================================================

dashboard_analyst = Agent(
    role="Resume Dashboard Analyst",
    goal="""
Generate ONLY valid JSON for the frontend dashboard.

Never return markdown.
Never use code blocks.
Return ONLY JSON.
""",
    backstory="""
You convert ATS analysis into structured dashboard
statistics for frontend visualization.
""",
    llm=llm,
    verbose=True,
)

# =====================================================
# Career Coach
# =====================================================

career_coach = Agent(
    role="Career Coach",
    goal="""
Suggest skills, certifications, roadmap,
career advice and improvement plan.
""",
    backstory="""
You have guided thousands of software engineering
students to improve their careers.
""",
    llm=llm,
    verbose=True,
)

# =====================================================
# Cover Letter Writer
# =====================================================

cover_letter_writer = Agent(
    role="Cover Letter Expert",
    goal="""
Generate a professional personalized cover letter.
""",
    backstory="""
You write compelling cover letters that increase
interview chances.
""",
    llm=llm,
    verbose=True,
)

# =====================================================
# LinkedIn Expert
# =====================================================

linkedin_writer = Agent(
    role="LinkedIn Profile Expert",
    goal="""
Generate professional LinkedIn content
optimized for recruiters.
""",
    backstory="""
You optimize LinkedIn profiles for software engineers.
""",
    llm=llm,
    verbose=True,
)

# =====================================================
# Interview Question Generator
# =====================================================

interview_generator = Agent(
    role="Technical Interviewer",
    goal="""
Generate HR, technical,
coding and scenario-based interview questions
with model answers.
""",
    backstory="""
You are a Senior Software Engineer who has conducted
hundreds of interviews at top product companies.
""",
    llm=llm,
    verbose=True,
)