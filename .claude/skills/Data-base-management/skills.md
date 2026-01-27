---
name: database-management
description: |
  This skill manages all database interactions for the Full-Stack Todo app.
  Use this skill when designing, creating, and querying SQLModel models
  connected to Neon Serverless PostgreSQL. Ensures data integrity, relationships,
  indexing, and optimized queries. Integrates with FastAPI for full-stack operations.
---

# Database Management Skill

## Instructions

1. Use SQLModel to define all database models.
2. Use Neon Serverless PostgreSQL as the backend.
3. Implement relationships:
   - Users → Tasks (one-to-many)
4. Include proper indexing for performance.
5. Write reusable query functions for CRUD operations.
6. Follow best practices for timestamps, default values, and constraints.
7. Integrate with FastAPI dependency injection for DB sessions.
8. Avoid raw SQL unless necessary; prefer SQLModel ORM methods.