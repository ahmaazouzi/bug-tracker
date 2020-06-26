using System;
using System.Collections.Generic;
using BugTracker.Models;

namespace BugTracker.Data
{
    public class MockCommentRepo : ICommentRepo
    {
        public Comment GetCommentById(int id)
        {
            return new Comment
            {
                ID = 1,
                CommenterID = 1,
                TicketID = 1,
                Payload = "You are not a good bug tracker!",
                Date = DateTime.Now,
                Commenter = new Account { FirstName = "Ahmed" },
                Ticket = new Ticket
                {
                    Summary = "What what!",
                    Description = "Yes Yes Yes Yes Yes!"
                }

            };
        }

        public IEnumerable<Comment> GetComments()
        {
            var tickets = new List<Comment> {
                new Comment{
                    ID = 1,
                    CommenterID = 1,
                    TicketID = 1,
                    Payload = "You are not a good bug tracker!",
                    Date = DateTime.Now,
                    Commenter = new Account { FirstName = "Ahmed" },
                    Ticket = new Ticket
                    {
                        Summary = "What what!",
                        Description = "Yes Yes Yes Yes Yes!"
                    }
                },
                new Comment{
                    ID = 1,
                    CommenterID = 1,
                    TicketID = 1,
                    Payload = "You are not a good bug tracker!",
                    Date = DateTime.Now,
                    Commenter = new Account { FirstName = "Ahmed" },
                    Ticket = new Ticket
                    {
                        Summary = "What what!",
                        Description = "Yes Yes Yes Yes Yes!"
                    }
                },
                new Comment{
                    ID = 1,
                    CommenterID = 1,
                    TicketID = 1,
                    Payload = "You are not a good bug tracker!",
                    Date = DateTime.Now,
                    Commenter = new Account { FirstName = "Ahmed" },
                    Ticket = new Ticket
                    {
                        Summary = "What what!",
                        Description = "Yes Yes Yes Yes Yes!"
                    }
                }
            };

            return tickets;
        }
    }
}