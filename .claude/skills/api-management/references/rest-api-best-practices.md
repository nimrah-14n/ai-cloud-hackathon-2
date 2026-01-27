# REST API Best Practices

1. **Consistent Endpoints**
   - Use plural nouns: `/tasks`, `/users`
   - Use HTTP verbs for actions: GET, POST, PUT, DELETE, PATCH

2. **Security**
   - JWT tokens for user authentication
   - Validate user ownership on all requests

3. **Status Codes**
   - 200 OK for successful GET/PUT/PATCH
   - 201 Created for POST
   - 204 No Content for DELETE
   - 400 Bad Request for validation errors
   - 401 Unauthorized for invalid tokens

4. **Error Handling**
   - Return structured JSON error messages
   - Example: `{ "error": "Task not found", "code": 404 }`

5. **Input Validation**
   - Use Pydantic schemas
   - Enforce field length, type, and required fields

6. **Documentation**
   - Use Markdown examples or OpenAPI schema
   - Include all possible responses

7. **Idempotency**
   - PUT and PATCH should be idempotent
   - POST creates new resources only

8. **Versioning**
   - Use `/api/v1/...` if future versions are expected