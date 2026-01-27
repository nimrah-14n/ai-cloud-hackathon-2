# Database Connection in Production

## Database Choice
- Neon Postgres (recommended)

## Best Practices
- Use connection pooling
- Store credentials in env variables
- Never hardcode secrets
- Validate schema before deployment

## Expected Outcome
- Reliable auth storage
- Persistent task data
- No data loss during demo