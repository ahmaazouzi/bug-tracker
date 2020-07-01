using System.Collections.Generic;
using BugTracker.Models;

namespace BugTracker
{
    public interface ICommentRepo
    {
        public IEnumerable<Comment> GetComments(int ticketID);
        public Comment GetCommentById(int id);
        public void CreateComment(Comment comment);
        public void EditComment(Comment comment);
        public void DeleteComment(Comment comment);
        public bool SaveChanges();
    }
}

