# Task CRUD References

## Guidelines
- Always validate input and enforce ownership.
- Use reusable subagents to avoid repeating CRUD logic.
- Prefer API-driven operations for full-stack consistency.
- Implement optimistic updates for better UX.
- Include automated tests for all CRUD operations.

## Performance Notes
- Index frequently queried columns like `user_id` and `completed`.
- Paginate task lists to improve response time.
- Avoid loading unnecessary fields from DB.

## Security
- Ensure authenticated user can only modify own tasks.
- Validate data before DB insert/update to prevent SQL injection.