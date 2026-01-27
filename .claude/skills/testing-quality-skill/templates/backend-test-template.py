def test_success_response(client, endpoint):
    response = client.get(endpoint)
    assert response.status_code == 200
    assert response.json() is not None


def test_unauthorized_access(client, endpoint):
    response = client.get(endpoint)
    assert response.status_code in [401, 403]