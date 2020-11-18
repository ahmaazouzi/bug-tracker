-- DROP Table Comments;DROP Table Attachments;DROP Table Assignments;DROP Table Tickets;DROP Table Accounts;DROP Table Teams;

INSERT INTO Teams VALUES(
	1,
	"Bug Tracker"
);

INSERT INTO Accounts VALUES(
	1,
	"Ahmed",
	"A",
	"Ahmadi",
	"https://www.photos.ph/1",
	"ahmed@bugtracker.com",
	"admin",
	"NAD83",
	"I have no life!"
);


INSERT INTO Sprints VALUES(
	1,
	NOW(),
	NOW(),
	"Create a bugtracker",
	"We successfully created a bugtracker",
	25,
	1,
	5
);



INSERT INTO Tickets VALUES(
	1,
	"Fix a bug",
	"Fixing a bug that's bugging me",
	NOW(),
	1,
	NOW(),
	1,
	"todo",
	1,
	NOW(),
	5,
	1
);

INSERT INTO Tickets VALUES(
	2,
	"Fix another bug",
	"Fixing a bug that's bugging me",
	NOW(),
	1,
	NOW(),
	1,
	"todo",
	1,
	NOW(),
	5,
	1
);

INSERT INTO Comments VALUES(
	1,
	1,
	1,
	"I am commenting, don't you know?!",
	NOW()
);

INSERT INTO Attachments VALUES(
	1,
	"https://www.attachments/1",
	1
);