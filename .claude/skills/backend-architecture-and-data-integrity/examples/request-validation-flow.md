# Request Validation Flow

## Objective
Ensure only valid, safe, and expected data reaches business logic.

## Flow
1. Request received
2. Schema validation (types, required fields)
3. Business rule validation
4. Reject early if invalid
5. Pass clean data to service layer

## Outcome
- No corrupted data
- No unexpected crashes
- Safer APIs