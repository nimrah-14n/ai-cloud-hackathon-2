# Example Reusable Queries

## Get all tasks for a user
```python
from sqlmodel import select
from models import Task
from db import session

def get_user_tasks(user_id: str):
    return session.exec(select(Task).where(Task.user_id == user_id)).all()

## Create a new task
def create_task(user_id: str, title: str, description: str = None):
    task = Task(user_id=user_id, title=title, description=description)
    session.add(task)
    session.commit()
    session.refresh(task)
    return task