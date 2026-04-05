from pydantic import BaseModel, Field
from typing import List, Dict
from datetime import date

class AnalyticsOverview(BaseModel):
    total_users: int
    total_posts: int
    total_comments: int
    avg_engagement_rate: float = Field(..., ge=0)

class DailyActiveUsers(BaseModel):
    date: date
    users: int = Field(..., gt=0)

class ActiveUsersResponse(BaseModel):
    period: str
    active_users: int
    data: List[DailyActiveUsers]

class Engagement(BaseModel):
    date: str
    posts: int
    likes: int
    comments: int

class EngagementResponse(BaseModel):
    period: str
    data: List[Engagement]

class TopPost(BaseModel):
    id: str
    content: str
    author: str
    likes: int
    comments: int
    engagement_score: float = Field(..., ge=0, le=10)

class TopPostsResponse(BaseModel):
    top_posts: List[TopPost]

class UserStats(BaseModel):
    user_id: str
    username: str
    total_posts: int
    total_likes: int
    total_comments: int
    total_reactions: int
    avg_engagement: float = Field(..., ge=0)

class UserEngagement(BaseModel):
    date: str
    score: float = Field(..., ge=0)

class UserEngagementResponse(BaseModel):
    user_id: str
    period: str
    trend: List[UserEngagement]

class BestTimeResponse(BaseModel):
    user_id: str
    best_day: str
    best_hour: int = Field(..., ge=0, le=23)
    recommendation: str

class UserComparison(BaseModel):
    user_id: str
    user_avg_likes: float = Field(..., ge=0)
    global_avg_likes: float = Field(..., ge=0)
    performance_percent: float = Field(..., ge=0)