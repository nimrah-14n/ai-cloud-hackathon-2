# Authentication State Flow

## Flow Overview

1. User submits login form
2. API validates credentials
3. Token/session returned
4. Global auth state updated
5. UI rerenders automatically
6. Protected routes unlock

---

## Key Rule
Auth state must live in a **global store**, not inside components.

---

## Common Mistake
Storing auth state only in local component state → causes logout bugs on refresh.

---

## Correct Pattern
- Read auth state globally
- Persist minimal data
- React to auth changes automatically