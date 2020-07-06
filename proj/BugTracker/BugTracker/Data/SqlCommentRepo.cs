using System;
using System.Collections.Generic;
using System.Linq;
using BugTracker.Models;

namespace BugTracker.Data
{
    public class SqlCommentRepo: ICommentRepo
    {
        private readonly BugTrackerContext _context;

        public SqlCommentRepo(BugTrackerContext context)
        {
            _context = context;
        }

        public void CreateComment(Comment comment)
        {
            if (comment == null)
                throw new ArgumentNullException(nameof(comment));
            _context.Comments.Add(comment);
        }

        public void DeleteComment(Comment comment)
        {
            if (comment == null)
                throw new ArgumentNullException(nameof(comment));
            _context.Comments.Remove(comment);
        }


        public void EditComment(Comment comment)
        {
            throw new NotImplementedException();
        }

        public Comment GetCommentById(int id)
        {
            return _context.Comments.FirstOrDefault(c => c.ID == id);
        }

        public IEnumerable<Comment> GetComments() //(int ticketID)
        {
            return _context.Comments; //.Where(c => c.TicketID == ticketID);
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
