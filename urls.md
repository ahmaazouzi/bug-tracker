# Endpoints Map:

# Logged-in User:

| UR | Verb | Operation | Description | Success | Failure
| --- | --- | --- | --- | --- | --- |
| /team{id} | GET | READ | Team landing<br> Shows active tickets | 200 OK | 400 Bad Request<br>404 Not Found |
| /team{id}/activetickets | GET | READ | Team landing<br> Shows active tickets | 200 OK | 400 Bad Request<br>404 Not Found |
| /team{id}/team | GET | READ | Info about the team | 200 OK | 400 Bad Request<br>404 Not Found |
| /team{id}/accounts | GET | READ | List accounts | 200 OK | 400 Bad Request<br>404 Not Found |
| /team{id}/accounts/{id} | GET | READ | Info about an account | 200 OK | 400 Bad Request<br>404 Not Found |
| /team{id}/accounts/{id}/assigned | GET | READ | Show tickets assigned to account | 200 OK |  |
| /team{id}/tickets/{id} |GET | READ | Shows all tickets (inactive, too) | 200 OK | 400 Bad Request<br>404 Not Found |
| /team{id}/tickets/{id} |GET | READ | Info about a ticket | 200 OK | 400 Bad Request<br>404 Not Found |
| 1 | 1 | 1 | 1 | 1 | 1 |


# Logged-in Manager:

# Logged-in Admin

## Landing page/Not Logged: