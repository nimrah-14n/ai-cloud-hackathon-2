# PUT /api/{user_id}/tasks/{id}

## Scenario
Update an existing task.

## Request
PUT /api/123/tasks/3
Authorization: Bearer <jwt_token>
Body:
{
  "title": "Updated Task Title",
  "description": "Updated description"
}

## Response
{
  "id": 3,
  "title": "Updated Task Title",
  "description": "Updated description",
  "completed": false,
  "updated_at": "2026-01-07T14:00:00Z"
}