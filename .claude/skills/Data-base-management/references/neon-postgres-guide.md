# Neon PostgreSQL Best Practices

1. **Use Connection Pooling**
   - Minimize cold starts in serverless DB
   - Prefer async connection pools with FastAPI

2. **Indexes**
   - Index foreign keys (`tasks.user_id`) for query efficiency
   - Index commonly filtered fields like `completed` or `created_at`

3. **Schema Design**
   - Normalize tables (Users, Tasks)
   - Avoid storing computed fields, calculate in queries

4. **Timestamps**
   - Always store `created_at` and `updated_at` for auditing
   - Use UTC for consistency

5. **Constraints**
   - Enforce NOT NULL where appropriate
   - Use `unique` constraints for email or important identifiers

6. **Security**
   - Never expose DB credentials in code
   - Use environment variables for connection string

7. **Reusability**
   - Define query functions in separate module for CRUD operations
   - Keep models separate from business logic