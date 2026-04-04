from pydantic import BaseModel, Field
from typing import List
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