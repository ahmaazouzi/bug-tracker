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
            return new Ticket {TicketId = 1, Summary = "Need Create a bugtracker",
                Description = "I mean, this bugtracker will revolutionize the whole world of bug tracking",
                Status = "ToDo", Active = 1,
                DateReported = DateTime.Now,
                DateAssigned = new DateTime(2020, 6, 20),
                DateClosed = new DateTime(20, 6, 30)

            };
        }

        public IEnumerable<Ticket> GetTickets()
        {
            var tickets = new List<Ticket>
            {
                new Ticket {TicketId = 1, Summary = "Need Create a bugtracker",
                    Description = "I mean, this bugtracker will revolutionize the whole world of bug tracking",
                    Status = "ToDo", Active = 1,
                    DateReported = DateTime.Now,
                    DateAssigned = DateTime.Now,
                    DateClosed = new DateTime(20, 6, 30)
                },
                new Ticket {TicketId = 1, Summary = "Need Create a bugtracker",
                    Description = "I mean, this bugtracker will revolutionize the whole world of bug tracking",
                    Status = "ToDo", Active = 1,
                    DateReported = new DateTime(2020, 6, 10),
                    DateAssigned = new DateTime(2020, 6, 20),
                    DateClosed = new DateTime(20, 6, 30)
                },
                new Ticket {TicketId = 1, Summary = "Need Create a bugtracker",
                    Description = "I mean, this bugtracker will revolutionize the whole world of bug tracking",
                    Status = "ToDo", Active = 1,
                    DateReported = new DateTime(2020, 6, 10),
                    DateAssigned = new DateTime(2020, 6, 20),
                    DateClosed = new DateTime(20, 6, 30)
                },
                new Ticket {TicketId = 1, Summary = "Need Create a bugtracker",
                    Description = "I mean, this bugtracker will revolutionize the whole world of bug tracking",
                    Status = "ToDo", Active = 1,
                    DateReported = new DateTime(2020, 6, 10),
                    DateAssigned = new DateTime(2020, 6, 20),
                    DateClosed = new DateTime(20, 6, 30)
                }
            };

            return tickets;


        }
    }
}
