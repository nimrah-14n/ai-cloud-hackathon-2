#### `relations.md`
```markdown
# User → Task Relationship

- One User can have many Tasks
- Tasks reference `user.id` via `user_id` foreign key
- Queries must filter tasks by `user_id` for user isolation