# Authentication Specification

## Scope
User signup, login, logout, session validation

---

## Rules
- Password must never be logged
- Tokens expire after defined duration
- Unauthorized access returns 401 only

---

## Acceptance Criteria
- Valid credentials grant access
- Invalid credentials never expose reason
- Expired token forces re-authentication