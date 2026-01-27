from fastapi import APIRouter, Depends, HTTPException
from typing import List
from models import Task, User
from schemas import TaskCreate, TaskUpdate
from auth import get_current_user

router = APIRouter()

@router.get("/api/{user_id}/tasks", response_model=List[Task])
async def get_tasks(user_id: str, current_user: User = Depends(get_current_user)):
    if current_user.id != user_id:
        raise HTTPException(status_code=401, detail="Unauthorized")
    tasks = await Task.filter(user_id=user_id)
    return tasks

@router.post("/api/{user_id}/tasks", response_model=Task, status_code=201)
async def create_task(user_id: str, task: TaskCreate, current_user: User = Depends(get_current_user)):
    if current_user.id != user_id:
        raise HTTPException(status_code=401, detail="Unauthorized")
    new_task = await Task.create(user_id=user_id, **task.dict())
    return new_task

@router.put("/api/{user_id}/tasks/{task_id}", response_model=Task)
async def update_task(user_id: str, task_id: int, task: TaskUpdate, current_user: User = Depends(get_current_user)):
    # Validation & update logic
    ...

@router.delete("/api/{user_id}/tasks/{task_id}", status_code=204)
async def delete_task(user_id: str, task_id: int, current_user: User = Depends(get_current_user)):
    # Validation & deletion logic
    ...

@router.patch("/api/{user_id}/tasks/{task_id}/complete", response_model=Task)
async def toggle_complete(user_id: str, task_id: int, current_user: User = Depends(get_current_user)):
    # Toggle logic
    ...