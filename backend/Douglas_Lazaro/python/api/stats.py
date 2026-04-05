from fastapi import APIRouter
from data.generate_fake_data import(
    generate_user_stats_data,
    generate_user_engagement_trend,
    generate_best_time_data,
    generate_User_Comparison_data
)

router = APIRouter(prefix="/api/stats/user", tags=["User Stats"])

@router.get("/{id}")
def get_user_stats(id: str):
    return generate_user_stats_data(id)

@router.get("/{id}/engagement-trend")
def get_user_engagement_trend(id: str):
    return generate_user_engagement_trend(id)

@router.get("/{id}/best-time")
def get_best_time(id: str):
    return generate_best_time_data(id)

@router.get("/{id}/comparison")
def get_user_comparison(id: str):
    return generate_User_Comparison_data(id)