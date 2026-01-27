# CRUD Skill - Task Management

## Purpose
This skill provides reusable intelligence for task CRUD operations in a multi-user Todo application. It standardizes creation, reading, updating, deleting, viewing, and marking tasks complete.

## Best Practices
- Always validate user input before saving to the database.
- Include proper error handling for database failures.
- Use optimistic updates for real-time responsiveness.
- Maintain task ownership: each task belongs to a single authenticated user.
- Support task filtering, sorting, and pagination for scalability.

## Usage
- Reuse in API, frontend, and agent workflows.
- Combine with `spec-manager` to auto-generate feature specs.
- Works with Next.js + FastAPI + SQLModel.