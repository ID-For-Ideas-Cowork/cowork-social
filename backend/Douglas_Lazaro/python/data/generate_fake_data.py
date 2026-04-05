from faker import Faker
from models.schemas import Engagement
from datetime import datetime, timedelta
import random
import statistics
from models.schemas import (AnalyticsOverview, DailyActiveUsers, ActiveUsersResponse, EngagementResponse, TopPost, TopPostsResponse, UserStats, UserEngagement, UserEngagementResponse, BestTimeResponse, UserComparison)

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

def generate_user_stats_data(user_id: str) -> UserStats:
    return UserStats(
        user_id=user_id,
        total_posts=fake.random_int(min=10, max=100),
        total_likes=fake.random_int(min=100, max=10000),
        total_comments=fake.random_int(min=20, max=200),
        total_reactions=fake.random_int(min=50, max=500),
        avg_engagement=round(random.uniform(1.0,9.0),2)
    )

def generate_user_engagement_trend(user_id: str) -> UserEngagementResponse:
    trend_data = [
        UserEngagement(
            date=(datetime.now() - timedelta(days=i)).strftime("%Y-%m-%d"),
            score=round(random.uniform(1.0,10.0),2)
        )for i in range(7)
    ]
    return UserEngagementResponse(
        user_id=user_id,
        period="last_7_days",
        trend=trend_data
    )

def generate_best_time_data(user_id:str) -> BestTimeResponse:
    days=['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo']
    return BestTimeResponse(
        user_id=user_id,
        best_day=random.choice(days),
        best_hour=random.randint(9,21),
        recommendation="Publica entre las 18:00 y las 21:00 para maximizar el alcance un 20%."
    )

def generate_User_Comparison_data(user_id: str) -> UserComparison:
    user_avg =  round(random.uniform(50,150),2)
    global_avg = 100.0
    return UserComparison(
        user_id=user_id,
        user_avg_likes=user_avg,
        global_avg_likes=global_avg,
        performance_percent=round((user_avg/global_avg)*100,2)
    )