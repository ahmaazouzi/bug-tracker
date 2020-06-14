CREATE TABLE account(
	accountID INT PRIMARY KEY AUTO_INCREMENT,
	firstName VARCHAR(16) NOT NULL,
	middleName VARCHAR(16) NOT NULL,
	lastName VARCHAR(16),
	photoURL VARCHAR(512) CHARACTER SET ascii,
	email VARCHAR(50) NOT NULL,
	spiritAnimal VARCHAR(32) NOT NULL,
	bio VARCHAR(1024),
	role VARCHAR(16) NOT NULL
);

CREATE TABLE comment(
	commentID INT PRIMARY KEY AUTO_INCREMENT,
	commenter INT NOT NULL,
	ticket INT NOT NULL,
	FOREIGN KEY (commenter) REFERENCES Account(accountID),
	FOREIGN KEY (ticket) REFERENCES Account(accountID),
	payload VARCHAR(32000),
	date DATE
);

CREATE TABLE ticket(
	ticketID INT PRIMARY KEY AUTO_INCREMENT,
	summary VARCHAR(512) NOT NULL,
	description VARCHAR(32000),
	status VARCHAR(50) NOT NULL,
	active BOOLEAN NOT NULL,
	dateReported DATE,
	dateAssigned DATE,
	dateClosed DATE,
	reporter INT NOT NULL,
	assignee INT NOT NULL,
	FOREIGN KEY (reporter) REFERENCES account(accountID),
	FOREIGN KEY (assignee) REFERENCES account(accountID),
	points TINYINT NOT NULL,
	tag INT,
	FOREIGN KEY (tag) REFERENCES tag(tagId)
);

CREATE TABLE tag(
	tagId INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(100)
);
