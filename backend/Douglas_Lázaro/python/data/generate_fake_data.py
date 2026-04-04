from faker import Faker
from models.schemas import Engagement
from datetime import datetime, timedelta
import random
from models.schemas import (AnalyticsOverview, DailyActiveUsers, ActiveUsersResponse, EngagementResponse, TopPost, TopPostsResponse)

fake = Faker('es_ES')

def generate_analytics_overview_data() -> AnalyticsOverview:
    users = fake.random_int(min=1000, max=5000)
    return AnalyticsOverview(
        total_users=users,
        total_posts=fake.random_int(min=500, max=users * 2),
        total_comments=fake.random_int(min=1000,max=10000),
        avg_engagement_rate=round(random.uniform(1.0, 10.0),1)
    )

def generate_active_users_data(days: int = 7) -> ActiveUsersResponse:
    daily_data = []
    total_active = 0
    for index in range(days):
        count = fake.random_int(min=50, max=500)
        total_active += count
        daily_data.append(DailyActiveUsers(
            date=(datetime.now() - timedelta(days=days-index-1)).strftime("%Y-%m-%d"),
            users=count
        ))
    return ActiveUsersResponse(period=f"last_{days}_days",active_users=total_active,data=daily_data)

def generate_engagement_data(period: str = "month") -> EngagementResponse:
    days = 30 if period == "month" else 7
    data = []
    for index in range(days):
        data.append(Engagement(
        date=(datetime.now() - timedelta(days=days-index-1)).strftime("%Y-%m-%d"),
        posts=fake.random_int(min=5, max=50),
        likes=fake.random_int(min=100, max=1000),
        comments=fake.random_int(min=20, max=200)
        ))
    return EngagementResponse(period=period, data=data)

def generate_top_posts_data(limit: int = 10) -> TopPostsResponse:
    posts = []
    for index in range(limit):
        posts.append(TopPost(
            id=str(index + 1),
            content=fake.sentence(nb_words=10),
            author=fake.name(),
            likes=fake.random_int(min=100, max=1000),
            comments=fake.random_int(min=10, max=100),
            engagement_score=round(random.uniform(1.0,10.0),1)
        ))
    return TopPostsResponse(top_posts=posts)