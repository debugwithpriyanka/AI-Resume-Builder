import requests

def search_jobs(query, location="India"):
    """
    Dummy job search.
    Replace with LinkedIn/Adzuna API if API keys are available.
    """

    jobs = [
        {
            "company": "Google",
            "title": "Python Developer",
            "location": "Bangalore",
            "match_score": 95,
            "apply_link": "https://careers.google.com"
        },
        {
            "company": "Microsoft",
            "title": "Backend Engineer",
            "location": "Hyderabad",
            "match_score": 91,
            "apply_link": "https://careers.microsoft.com"
        },
        {
            "company": "Amazon",
            "title": "Software Development Engineer",
            "location": "Chennai",
            "match_score": 89,
            "apply_link": "https://amazon.jobs"
        }
    ]

    return jobs