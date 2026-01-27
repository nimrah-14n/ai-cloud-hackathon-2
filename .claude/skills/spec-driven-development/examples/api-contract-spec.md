# API Contract Specification

## Endpoint
POST /tasks

---

## Request Schema
- title: string (required)
- description: string (optional)

---

## Response Schema
- id: string
- title: string
- status: pending | completed
- createdAt: ISO timestamp

---

## Error Conditions
- 400 → validation failure
- 401 → unauthorized
- 500 → internal failure