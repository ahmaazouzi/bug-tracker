# Database Design:
- At a first glance, document databases seem like an ideal choice for this type of application, but I decided to take a relational approach. I might switch back tothe document model or even have a hybrid of the two.

## Tables:
- After some thought, it sounds like the following tables are all I need. This might be altered in the future. I am not sure if a ticket's description, for example, would be better served with TEXT rather than VARCHAR.

### Account:
	- accountID INT PRIMARY KEY AUTO_INCREMENT
	- FirstName VARCHAR(16)
	- Middle Name VARCHAR(16)
	- LastName VARCHAR(16)
	- photoURL VARCHAR(512) CHARACTER SET ascii
	- Email VARCHAR(50)
	- SpiritAnimal(32)
	- Bio VARCHAR(1024)
	- Role VARCHAR(16)

### Ticket: 
	- TicketID INT PRIMARY KEY AUTO_INCREMENT
	- Summary VARCHAR(512)
	- Description VARCHAR(65535)
	- Status VARCHAR(50)
	- Active BOOLEAN NOT NULL
	- DateReported DATE
	- DateAssigned DATE
	- DateClosed DATE
	- FOREIGN KEY (Reporter) REFERENCES Account(accountID)
	- FOREIGN KEY (Assignee) REFERENCES Account(accountID)
	- Points SHORT NOT NULL
	- FOREIGN KEY (Tag) REFERENCES Tag(TagId)

### Comment:
	- CommentID INT PRIMARY KEY AUTO_INCREMENT
	- FOREIGN KEY (Commenter) REFERENCES Account(accountID)
	- Payload VARCHAR(65535)
	- Date DATE

### Tag:
	- TagId INT PRIMARY KEY AUTO_INCREMENT
	- Name VARCHAR(100)