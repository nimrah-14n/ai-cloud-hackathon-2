# Task Feature Specification

## Feature Name
Task Management – Core Lifecycle

---

## Description
Allows users to create, view, update, complete, and delete tasks
with deterministic behavior and consistent UI state.

---

## Functional Requirements
- User can create a task with title and optional description
- Task is stored persistently
- Task status defaults to "pending"
- Task can be marked as completed
- Completed tasks cannot be edited unless reverted

---

## Non-Functional Requirements
- Operations must be idempotent
- API responses must be consistent
- UI must reflect state changes immediately

---

## Acceptance Criteria
- Task appears in list after creation
- Task status toggles correctly
- Deleted task never reappears
- Invalid input is rejected gracefully

---

## Edge Cases
- Empty title → reject
- Duplicate submission → ignore
- Network failure → retry-safe

---

## Dependencies
- backend-architecture
- api-contract-design
- frontend-state-management