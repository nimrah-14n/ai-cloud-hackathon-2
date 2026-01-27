# User Authentication References

## JWT Authentication
- Use JWT for stateless authentication.
- Include `user_id` in the payload.
- Sign with strong secret stored in environment variables (`BETTER_AUTH_SECRET`).
- Set token expiry for security (e.g., 7 days).

## Better Auth Integration
- Better Auth handles signup/login flows and session creation.
- Integrates directly with Next.js frontend.
- Backend verification: decode JWT, validate signature, extract user ID.
- All API requests must include token in `Authorization` header.

## Security Notes
- Never store passwords in plaintext.
- Use HTTPS for all API calls.
- Implement refresh tokens or automatic logout for stale sessions.
- Consider multi-factor authentication for enterprise-level security.

## Best Practices
- Reuse this skill in all multi-user applications.
- Combine with CRUD skill to protect user-specific data.
- Combine with SpecManager for automated spec-driven workflows.