using System;
using System.Collections.Generic;
using BugTracker.Models;

namespace BugTracker.Data
{
    public class MockCommentRepo : ICommentRepo
    {
        public void CreateComment(Comment comment)
        {
            throw new NotImplementedException();
        }

        public void DeleteComment(Comment comment)
        {
            throw new NotImplementedException();
        }

        public void EditComment(Comment comment)
        {
            throw new NotImplementedException();
        }

        public Comment GetCommentById(int id)
        {
            return new Comment
            {
                ID = 1,
                AccountID = 1,
                TicketID = 1,
                Payload = "You are not a good bug tracker!",
                Date = DateTime.Now
            };
        }

        public IEnumerable<Comment> GetComments()
        {
            var tickets = new List<Comment> {
                new Comment{
                    ID = 1,
                    AccountID = 1,
                    TicketID = 1,
                    Payload = "You are not a good bug tracker!",
                    Date = DateTime.Now
                },
                new Comment{
                    ID = 1,
                    AccountID = 1,
                    TicketID = 1,
                    Payload = "You are not a good bug tracker!",
                    Date = DateTime.Now
                },
                new Comment{
                    ID = 1,
                    AccountID = 1,
                    TicketID = 1,
                    Payload = "You are not a good bug tracker!",
                    Date = DateTime.Now
                }
            };

            return tickets;
        }

        public bool SaveChanges()
        {
            throw new NotImplementedException();
        }
    }
}