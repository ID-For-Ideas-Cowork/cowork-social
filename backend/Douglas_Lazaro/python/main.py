from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware
from api.analytics import router as analytics_router
from api.stats import router as stats_router

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
            "top_posts": "/api/analytics/top-posts?limit=10",
            "user_stats": "/api/stats/user/{id}",
            "user_engagement_trend": "/api/stats/user/{id}/engagement-trend",
            "best_time": "/api/stats/user/{id}/best-time",
            "user_comparison": "/api/stats/user/{id}/comparison"


        }
    }

app.include_router(analytics_router)
app.include_router(stats_router)