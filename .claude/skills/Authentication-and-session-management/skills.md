# User Authentication & Session Management Skill

## Purpose
This skill provides reusable intelligence for secure user authentication, signup, login, and session management. It integrates with Better Auth and JWT to ensure stateless, secure, multi-user access.

## Best Practices
- Always hash and validate passwords (if not using fully managed auth).
- Use JWT tokens for stateless authentication between frontend and backend.
- Include token expiry and refresh mechanisms for security.
- Enforce proper authorization: users can only access their own data.
- Support social login or multi-factor authentication for enterprise readiness.
- Use middleware to verify authentication on all backend endpoints.

## Usage
- Reusable for multi-user web apps built with Next.js + FastAPI.
- Can be extended to add OAuth2 or social login.
- Integrates seamlessly with CRUD, API, and subagents for session-aware operations.