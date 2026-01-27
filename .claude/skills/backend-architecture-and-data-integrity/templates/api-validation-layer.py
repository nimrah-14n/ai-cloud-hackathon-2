from pydantic import BaseModel, Field

class TaskCreateRequest(BaseModel):
    title: str = Field(min_length=3)
    description: str | None = None
    completed: bool = False