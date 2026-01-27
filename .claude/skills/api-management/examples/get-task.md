# GET /api/{user_id}/tasks

## Scenario
Fetch all tasks for a specific user.

## Request
GET /api/123/tasks
Authorization: Bearer <jwt_token>

## Response
[
  {
    "id": 1,
    "title": "Finish Hackathon Phase II",
    "description": "Implement API endpoints using FastAPI",
    "completed": false,
    "created_at": "2026-01-07T12:00:00Z"
  },
  {
    "id": 2,
    "title": "Test JWT Auth",
    "description": "Validate token and user isolation",
    "completed": true,
    "created_at": "2026-01-06T18:30:00Z"
  }
]