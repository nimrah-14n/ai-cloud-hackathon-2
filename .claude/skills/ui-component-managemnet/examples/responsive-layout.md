#### `responsive-layout.md`
```markdown
# Responsive Layout Example

- Mobile-first design
- Task list stacks on small screens
- Navbar collapses to hamburger
- Uses Tailwind CSS responsive classes

```tsx
<div className="container mx-auto p-4">
  <Navbar username="John" />
  <TaskList tasks={tasks} />
</div>