# Frontend Error Handling Example

## Scenario
User submits a task form, but the API request fails due to network or server error.

## Expected Behavior
- UI should NOT crash
- User sees a clear message
- Retry option is available

## Example Flow
1. User clicks "Add Task"
2. API returns error
3. UI shows:
   "Something went wrong. Please try again."

## Best Practices
- Use try/catch for async actions
- Show fallback UI
- Avoid technical error messages
- Keep user informed, not confused