# Error Handling UI Strategy

## Types of Errors
- Network failure
- Validation errors
- Authorization failure
- Unexpected server error

## UI Response
- Show friendly error message
- Provide retry or corrective action
- Log error context (for monitoring)

## Rule
Errors must never leave UI in broken state.