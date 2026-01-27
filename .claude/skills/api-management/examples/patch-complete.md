# PATCH /api/{user_id}/tasks/{id}/complete

## Scenario
Toggle task completion status.

## Request
PATCH /api/123/tasks/1/complete
Authorization: Bearer <jwt_token>

## Response
{
  "id": 1,
  "title": "Finish Hackathon Phase II",
  "completed": true
}