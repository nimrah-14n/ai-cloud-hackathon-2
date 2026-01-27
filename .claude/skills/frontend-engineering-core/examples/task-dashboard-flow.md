# Task Dashboard UI Flow

## Description
Defines how the task dashboard behaves from initial load to interaction.

## Flow
1. Page loads → show loading skeleton
2. API success:
   - If tasks exist → render task list
   - If empty → show empty-state CTA
3. User actions:
   - Add task → inline form
   - Update task → modal or inline edit
   - Delete task → confirmation UI
   - Mark complete → instant visual feedback

## UI Rules
- No blocking UI
- Optimistic updates
- Error feedback must be visible and recoverable