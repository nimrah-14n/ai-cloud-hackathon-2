def create_task_with_transaction(session, task_data):
    try:
        task = Task(**task_data)
        session.add(task)
        session.commit()
        return task
    except Exception:
        session.rollback()
        raise