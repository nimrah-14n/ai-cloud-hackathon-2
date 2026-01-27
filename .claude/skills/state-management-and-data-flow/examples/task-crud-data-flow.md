# Task CRUD Data Flow

## Create Task Flow

UI → API → Database → API Response → State Update → UI Refresh

---

## Rules
- Never mutate UI list directly
- Always sync with API response
- Refetch or merge response safely

---

## Professional Pattern
- Create task
- Receive created task from API
- Update global task list
- UI updates instantly