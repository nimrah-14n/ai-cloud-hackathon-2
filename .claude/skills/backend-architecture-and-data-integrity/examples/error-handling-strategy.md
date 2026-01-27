# Error Handling Strategy

## Principles
- Never expose stack traces
- Errors must be consistent
- Errors must be actionable

## Example
Instead of:
"KeyError at line 42"

Return:
{
  "error": "Invalid request",
  "message": "Task title is required"
}