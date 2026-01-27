# Transactional Operations

## Scenario
Creating a task requires:
- Writing task data
- Linking it to a user
- Updating task counters

## Rule
All operations succeed or all fail.

## Why
Partial writes cause:
- Orphan records
- Broken UI
- Trust loss

## Solution
Wrap operations in database transactions.