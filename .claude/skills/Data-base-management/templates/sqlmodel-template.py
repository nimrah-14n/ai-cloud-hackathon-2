---

### **`templates/sqlmodel-template.py`**
```python
from sqlmodel import SQLModel, Field
from typing import Optional
from datetime import datetime

# Example Task Template
class Task(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: str = Field(foreign_key="user.id")
    title: str = Field(max_length=200)
    description: Optional[str] = Field(default=None, max_length=1000)
    completed: bool = Field(default=False)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: Optional[datetime] = None

# Example User Template
class User(SQLModel, table=True):
    id: str = Field(primary_key=True)
    email: str = Field(unique=True, max_length=255)
    name: str = Field(max_length=100)
    created_at: datetime = Field(default_factory=datetime.utcnow)