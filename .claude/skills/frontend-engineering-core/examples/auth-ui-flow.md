# Authentication UI Flow

## Signup
- Validate inputs before submit
- Disable submit during request
- Show inline error messages

## Login
- Preserve user session state
- Redirect based on role/access
- Handle expired token gracefully

## UX Rules
- Never expose backend error messages directly
- Always guide user to recovery