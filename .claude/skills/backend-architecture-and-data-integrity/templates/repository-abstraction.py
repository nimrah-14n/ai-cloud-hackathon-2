class TaskRepository:
    def create(self, session, data):
        task = Task(**data)
        session.add(task)
        return task