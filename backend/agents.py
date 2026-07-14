from crewai import Agent, LLM

# =====================================================
# Configure Ollama (Llama 3)
# =====================================================

llm = LLM(
    model="ollama/llama3",
    base_url="http://localhost:11434",
    temperature=0.3,
)

# =====================================================
# Resume Writer Agent
# =====================================================

resume_writer = Agent(
    role="Senior Resume Writer",
    goal="""
Create an ATS-friendly, professional, modern resume that is
optimized for the provided job description.
""",
    backstory="""
You are a world-class resume writer with over 15 years of
experience helping software engineers and students get hired at
companies like Google, Microsoft, Amazon, Meta and Adobe.

You understand ATS systems and recruiter expectations.

Your resumes are clean, professional and keyword optimized.
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
Analyze resumes exactly like an Applicant Tracking System.
Evaluate keyword match, formatting, grammar and overall quality.
""",
    backstory="""
You are an ATS optimization expert.

You have reviewed thousands of resumes and know how modern
recruitment software evaluates candidates.

Provide honest and actionable feedback.
""",
    llm=llm,
    verbose=True,
)

# =====================================================
# Career Coach
# =====================================================

career_coach = Agent(
    role="Senior Career Coach",
    goal="""
Help students improve their resumes and build a roadmap
towards becoming industry-ready software engineers.
""",
    backstory="""
You have mentored thousands of students.

You recommend certifications,
projects,
career roadmaps,
learning resources,
GitHub improvements,
portfolio improvements,
interview preparation,
and career growth plans.
""",
    llm=llm,
    verbose=True,
)

# =====================================================
# Cover Letter Writer
# =====================================================

cover_letter_writer = Agent(
    role="Professional Cover Letter Writer",
    goal="""
Write personalized and professional cover letters
tailored specifically to the uploaded resume and job description.
""",
    backstory="""
You specialize in writing high-converting cover letters
that increase interview chances.

Every cover letter should sound human,
professional and personalized.
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
Optimize LinkedIn profiles to attract recruiters.
""",
    backstory="""
You are a LinkedIn branding expert.

You create engaging headlines,
About sections,
Featured project descriptions,
and recruiter-friendly profiles.
""",
    llm=llm,
    verbose=True,
)

# =====================================================
# Interview Generator
# =====================================================

interview_generator = Agent(
    role="Technical Interview Expert",
    goal="""
Generate interview questions with answers based on
the generated resume and job description.
""",
    backstory="""
You are a Senior Software Engineering Interviewer.

Generate

• HR Questions

• Technical Questions

• Coding Questions

• Scenario Based Questions

Also provide model answers.
""",
    llm=llm,
    verbose=True,
)

# =====================================================
# Dashboard Analyst (NEW)
# =====================================================

dashboard_analyst = Agent(
    role="Resume Analytics Expert",
    goal="""
Generate structured dashboard analytics in JSON format.

The JSON should contain

ATS Score

Resume Score

Grammar Score

Keyword Match

Matched Skills

Missing Skills

Recommended Certifications

Overall Feedback
""",
    backstory="""
You specialize in resume analytics.

You convert resume evaluations into structured JSON
that frontend dashboards can directly consume.

Always output valid JSON only.
""",
    llm=llm,
    verbose=True,
)