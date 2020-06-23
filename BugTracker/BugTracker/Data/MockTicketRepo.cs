using System;
using System.Collections.Generic;
using BugTracker.Models;

namespace BugTracker.Data
{
    public class MockTicketRepo: ITicketRepo
    {
        public MockTicketRepo()
        {
        }

        public Ticket GetTicketById(int id)
        {
            return new Ticket
            {
                ID = 1,
                Summary = "Write Models",
                Description = "I mean, this bugtracker will revolutionize the whole world of bug tracking",
                DateReported = DateTime.Now,
                DateAssigned = DateTime.Now,
                AssigneeID = 33,
                Status = Status.ToDo,
                Active = false,
                DateClosed = new DateTime(20, 6, 30),
                Points = 3,
                Reporter = new Account { FirstName = "Ahmed" },
                Assignee = new Account { FirstName = "Ahmed" },
                Comments = new HashSet<Comment> {
                        new Comment { Payload = "You are lazy!"},
                        new Comment { Payload = "Do you think you know what you're doing?"} ,
                        new Comment { Payload = "Do you even know what's happening?"}
                        }
            };
        }

        public IEnumerable<Ticket> GetTickets()
        {
            var tickets = new List<Ticket>
            {
                new Ticket {
                    ID = 1,
                    Summary = "Write Models",
                    Description = "I mean, this bugtracker will revolutionize the whole world of bug tracking",
                    DateReported = DateTime.Now,
                    Status = Status.ToDo,
                    Active = false,
                    DateClosed = new DateTime(20, 6, 30),
                    Points = 3,
                    Reporter = new Account {FirstName = "Ahmed"},
                    Comments = new HashSet<Comment> {
                        new Comment { Payload = "You are lazy!"},
                        new Comment { Payload = "Do you think you know what you're doing?"} ,
                        new Comment { Payload = "Do you even know what's happening?"}
                        }
                },
                new Ticket {
                    ID = 1,
                    Summary = "Write Models",
                    Description = "I mean, this bugtracker will revolutionize the whole world of bug tracking",
                    DateReported = DateTime.Now,
                    DateAssigned = DateTime.Now,
                    AssigneeID = 33,
                    Status = Status.ToDo,
                    Active = false,
                    DateClosed = new DateTime(20, 6, 30),
                    Points = 3,
                    Reporter = new Account {FirstName = "Ahmed"},
                    Assignee = new Account {FirstName = "Ahmed"},
                    Comments = new HashSet<Comment> {
                        new Comment { Payload = "You are lazy!"},
                        new Comment { Payload = "Do you think you know what you're doing?"} ,
                        new Comment { Payload = "Do you even know what's happening?"}
                        }
                },
                new Ticket {
                    ID = 1,
                    Summary = "Write Models",
                    Description = "I mean, this bugtracker will revolutionize the whole world of bug tracking",
                    DateReported = DateTime.Now,
                    DateAssigned = DateTime.Now,
                    AssigneeID = 33,
                    Status = Status.ToDo,
                    Active = false,
                    DateClosed = new DateTime(20, 6, 30),
                    Points = 3,
                    Reporter = new Account {FirstName = "Ahmed"},
                    Assignee = new Account {FirstName = "Ahmed"},
                    Comments = new HashSet<Comment> {
                        new Comment { Payload = "You are lazy!"},
                        new Comment { Payload = "Do you think you know what you're doing?"} ,
                        new Comment { Payload = "Do you even know what's happening?"}
                        }
                },
            };

            return tickets;
        }
    }
}
