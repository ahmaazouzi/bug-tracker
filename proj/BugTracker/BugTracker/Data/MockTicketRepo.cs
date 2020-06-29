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

        public void CreateTicket(Ticket ticket)
        {
            throw new NotImplementedException();
        }

        public void DeleteTicket(Ticket ticket)
        {
            throw new NotImplementedException();
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
                AssignmentID = 33,
                Status = Status.ToDo,
                Active = false,
                DateClosed = new DateTime(20, 6, 30),
                Points = 3,
                Reporter = new Account { FirstName = "Ahmed" },
                Assignment = new Assignment { ID = 1 },
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
                new Ticket
                {
                    ID = 1,
                    Summary = "Write Models",
                    Description = "I mean, this bugtracker will revolutionize the whole world of bug tracking",
                    DateReported = DateTime.Now,
                    DateAssigned = DateTime.Now,
                    AssignmentID = 33,
                    Status = Status.ToDo,
                    Active = false,
                    DateClosed = new DateTime(20, 6, 30),
                    Points = 3,
                    Reporter = new Account { FirstName = "Ahmed" },
                    Assignment = new Assignment { ID = 1 },
                    Comments = new HashSet<Comment> {
                            new Comment { Payload = "You are lazy!"},
                            new Comment { Payload = "Do you think you know what you're doing?"} ,
                            new Comment { Payload = "Do you even know what's happening?"}
                            }
                },
                new Ticket
                {
                    ID = 1,
                    Summary = "Write Models",
                    Description = "I mean, this bugtracker will revolutionize the whole world of bug tracking",
                    DateReported = DateTime.Now,
                    DateAssigned = DateTime.Now,
                    AssignmentID = 33,
                    Status = Status.ToDo,
                    Active = false,
                    DateClosed = new DateTime(20, 6, 30),
                    Points = 3,
                    Reporter = new Account { FirstName = "Ahmed" },
                    Assignment = new Assignment { ID = 1 },
                    Comments = new HashSet<Comment> {
                            new Comment { Payload = "You are lazy!"},
                            new Comment { Payload = "Do you think you know what you're doing?"} ,
                            new Comment { Payload = "Do you even know what's happening?"}
                            }
                },
                new Ticket
                {
                    ID = 1,
                    Summary = "Write Models",
                    Description = "I mean, this bugtracker will revolutionize the whole world of bug tracking",
                    DateReported = DateTime.Now,
                    DateAssigned = DateTime.Now,
                    AssignmentID = 33,
                    Status = Status.ToDo,
                    Active = false,
                    DateClosed = new DateTime(20, 6, 30),
                    Points = 3,
                    Reporter = new Account { FirstName = "Ahmed" },
                    Assignment = new Assignment { ID = 1 },
                    Comments = new HashSet<Comment> {
                            new Comment { Payload = "You are lazy!"},
                            new Comment { Payload = "Do you think you know what you're doing?"} ,
                            new Comment { Payload = "Do you even know what's happening?"}
                            }
                }
            };

            return tickets;
        }

        public bool SaveChanges()
        {
            throw new NotImplementedException();
        }

        public void UpdateTicket(Ticket ticket)
        {
            throw new NotImplementedException();
        }
    }
}
