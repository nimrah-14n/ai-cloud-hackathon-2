# Optimistic Update Flow

## What It Is
UI updates BEFORE API response for speed.

---

## When to Use
- Mark task complete
- Toggle status
- Non-critical updates

---

## Safe Pattern
1. Update UI optimistically
2. Call API
3. If success → keep state
4. If failure → rollback

---

## Warning
Never use optimistic updates for:
- Payments
- Auth
- Critical writes