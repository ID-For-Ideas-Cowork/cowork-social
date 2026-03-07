from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="CoWork Analytics API",
    description="API de analytics con datos mock para CoWork Social",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {
        "message": "CoWork Analytics API - BE-03",
        "docs": "/docs",
        "endpoints": {
            "overview": "/api/analytics/overview",
            "active_users": "/api/analytics/active-users?days=7",
            "engagement": "/api/analytics/engagement?period=month",
            "top_posts": "/api/analytics/top-posts?limit=10"
        }
    }

# TODO: Implementar endpoints para BE-03
# Ver README.md para ejemplos y estructura de responses
