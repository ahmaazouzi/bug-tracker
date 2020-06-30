# Endpoints Map:

# Logged-in User:

| UR | Verb | Operation | Description | Success | Failure
| --- | --- | --- | --- | --- | --- |
| /teams/ | GET | READ | List teams | 200 OK | 400 Bad Request<br>404 Not Found |
| /teams/{id} | GET | READ | Info about the team | 200 OK | 400 Bad Request<br>404 Not Found |
| /team{id} | GET | READ | Team landing<br> Shows active tickets | 200 OK | 400 Bad Request<br>404 Not Found |
| /team{id}/activetickets | GET | READ | Team landing<br> Shows active tickets | 200 OK | 400 Bad Request<br>404 Not Found |
| /team{id}/team | GET | READ | Info about the team | 200 OK | 400 Bad Request<br>404 Not Found |
| /team{id}/accounts | GET | READ | List accounts | 200 OK | 400 Bad Request<br>404 Not Found |
| /team{id}/accounts/{id} | GET | READ | Info about an account | 200 OK | 400 Bad Request<br>404 Not Found |
| /team{id}/accounts/{id}/assigned | GET | READ | Show tickets assigned to account | 200 OK |  |
| /team{id}/tickets |GET | READ | Shows all tickets (inactive, too) | 200 OK | 400 Bad Request<br>404 Not Found |
| /team{id}/tickets/{id} |GET | READ | Info about a ticket | 200 OK | 400 Bad Request<br>404 Not Found |
| /tickets/{ticketID}/comments |GET | READ | Comments on a ticket | 200 OK | 400 Bad Request<br>404 Not Found |
| /tickets/{ticketID}/comments/{id} |GET | READ | A comment a ticket | 200 OK | 400 Bad Request<br>404 Not Found |
| /tickets/{ticketID}/attachments |GET | READ | Attachments of a ticket | 200 OK | 400 Bad Request<br>404 Not Found |
| /tickets/{ticketID}/attachments/{id} |GET | READ | an attachment of a ticket | 200 OK | 400 Bad Request<br>404 Not Found |



# Logged-in Manager:
| UR | Verb | Operation | Description | Success | Failure |

# Logged-in Admin:

| UR | Verb | Operation | Description | Success | Failure
| --- | --- | --- | --- | --- | --- |
| /teams/ | GET | READ | List teams | 200 OK | 400 Bad Request<br>404 Not Found |

## Landing page/Not Logged: 