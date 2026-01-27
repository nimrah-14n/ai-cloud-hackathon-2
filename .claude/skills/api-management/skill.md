---
name: api-management
description: |
  This skill manages RESTful API endpoints for the Full-Stack Todo application.
  Use this skill when implementing communication between frontend and backend,
  CRUD operations, and task completion toggling. Ensures consistency, proper
  status codes, validation, and security with JWT authentication.
---

# API Management Skill

## Instructions

1. Always follow the OpenAPI conventions for route design.
2. Implement CRUD endpoints for tasks:
   - GET /api/{user_id}/tasks
   - POST /api/{user_id}/tasks
   - PUT /api/{user_id}/tasks/{id}
   - DELETE /api/{user_id}/tasks/{id}
   - PATCH /api/{user_id}/tasks/{id}/complete
3. Validate all inputs using Pydantic models.
4. Integrate JWT authentication to identify the user.
5. Return proper HTTP status codes:
   - 200 OK for successful GET/PUT/PATCH
   - 201 Created for POST
   - 204 No Content for DELETE
   - 400 Bad Request for validation errors
   - 401 Unauthorized for invalid JWT
6. Use exception handling for edge cases.

## Examples

Reference `/examples` for usage scenarios.