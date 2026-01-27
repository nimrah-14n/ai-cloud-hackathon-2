# POST /api/{user_id}/tasks

## Scenario
Create a new task for the authenticated user.

## Request
POST /api/123/tasks
Authorization: Bearer <jwt_token>
Body:
{
  "title": "New API Task",
  "description": "Implement POST endpoint"
}

## Response
{
  "id": 3,
  "title": "New API Task",
  "description": "Implement POST endpoint",
  "completed": false,
  "created_at": "2026-01-07T13:00:00Z"
}