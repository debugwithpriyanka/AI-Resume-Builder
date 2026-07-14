from crewai import Agent, LLM

# -------------------------------
# Configure Ollama Llama3
# -------------------------------
llm = LLM(
    model="ollama/llama3",
    base_url="http://localhost:11434"
)

# -------------------------------
# Resume Writer Agent
# -------------------------------
resume_writer = Agent(
    role="Professional Resume Writer",
    goal="Generate an ATS-friendly professional resume from the student's profile and job description.",
    backstory=(
        "You are an expert resume writer with years of experience creating "
        "ATS-friendly resumes for students and professionals."
    ),
    llm=llm,
    verbose=True,
)

# -------------------------------
# ATS Reviewer Agent
# -------------------------------
ats_reviewer = Agent(
    role="ATS Resume Reviewer",
    goal="Evaluate resumes and generate ATS reports with score and keyword analysis.",
    backstory=(
        "You specialize in Applicant Tracking Systems and know how companies "
        "screen resumes."
    ),
    llm=llm,
    verbose=True,
)

# -------------------------------
# Career Coach Agent
# -------------------------------
career_coach = Agent(
    role="Career Coach",
    goal="Suggest improvements, certifications, missing skills and career roadmap.",
    backstory=(
        "You have helped thousands of students improve their resumes and "
        "prepare for software engineering careers."
    ),
    llm=llm,
    verbose=True,
)

# -------------------------------
# Cover Letter Agent
# -------------------------------
cover_letter_writer = Agent(
    role="Cover Letter Writer",
    goal="Generate a professional cover letter based on resume and job description.",
    backstory="You write personalized and professional cover letters.",
    llm=llm,
    verbose=True,
)

# -------------------------------
# LinkedIn About Agent
# -------------------------------
linkedin_writer = Agent(
    role="LinkedIn Profile Expert",
    goal="Create an attractive LinkedIn About section.",
    backstory="You optimize LinkedIn profiles for recruiters.",
    llm=llm,
    verbose=True,
)

# -------------------------------
# Interview Question Generator
# -------------------------------
interview_generator = Agent(
    role="Interview Question Generator",
    goal="Generate technical and HR interview questions.",
    backstory="You are a senior technical interviewer.",
    llm=llm,
    verbose=True,
)