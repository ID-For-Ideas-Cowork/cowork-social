# TODO: Implementar endpoints para BE-03
# Ver README.md para ejemplos y estructura de responses
from fastapi import APIRouter
from data.generate_fake_data import (
    generate_analytics_overview_data,
    generate_active_users_data,
    generate_engagement_data,
    generate_top_posts_data
)

router = APIRouter(tags=["Analytics"])


@router.get("/api/analytics/overview")
def get_analytics_overview():
    return generate_analytics_overview_data()

@router.get("/api/analytics/active-users")
def get_active_users(days: int = 7):
    return generate_active_users_data(days)

@router.get("/api/analytics/engagement")
def get_engagement(period: str = "month"):
    return generate_engagement_data(period)

@router.get("/api/analytics/top-posts")
def get_top_post(limit: int = 10):
    return generate_top_posts_data(limit)