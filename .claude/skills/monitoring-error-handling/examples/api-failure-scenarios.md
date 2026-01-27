# API Failure Scenarios

## Scenario 1: Invalid Input
Status: 400
Message: "Invalid task data provided"

## Scenario 2: Unauthorized User
Status: 401
Message: "Authentication required"

## Scenario 3: Server Failure
Status: 500
Message: "Unexpected error occurred"

## API Response Shape
{
  "success": false,
  "message": "Human readable message"
}

## Rule
Frontend should NEVER depend on raw backend errors.