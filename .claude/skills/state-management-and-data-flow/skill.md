---
name: state-management-and-data-flow
description: MUST BE USED for managing application state, async data flow, loading/error handling, and UI-data synchronization. Use proactively whenever frontend interacts with APIs, authentication, or shared data.
---

# State Management & Data Flow Skill

## Purpose
This skill ensures that frontend UI, backend APIs, and database state remain consistent, predictable, and professional under real user behavior.

Without proper state management:
- UI becomes buggy
- Data feels unreliable
- UX looks amateur

This skill prevents those failures.

---

## What This Skill Controls

### Frontend State
- Authentication state
- User session persistence
- UI loading/error/empty states
- Modal, form, and interaction state

### Server (API) State
- Fetching and caching data
- Refetching after mutations
- Preventing stale data
- Optimistic updates

---

## Core Principles

1. **Single Source of Truth**
   Do not duplicate state across components.

2. **Separation of Concerns**
   - UI State ≠ Server State
   - Local state ≠ Global state

3. **Explicit Async Flow**
   Every async action must handle:
   - loading
   - success
   - error

4. **Predictable Updates**
   UI must reflect backend reality, not assumptions.

---

## When This Skill MUST Be Used

- After login / logout
- CRUD operations
- API integration
- Dashboard updates
- Multi-component data sharing
- Any async action

---

## Tooling Compatibility

- Next.js / React (TS)
- Zustand / Context / Custom store
- FastAPI backend
- REST APIs
- JWT / session auth

---

## Outcome

Using this skill makes your project:
- Stable
- Smooth
- Professional
- Judge-approved
- Market-ready