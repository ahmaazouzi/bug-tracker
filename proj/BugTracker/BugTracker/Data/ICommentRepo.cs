using System.Collections.Generic;
using BugTracker.Models;

namespace BugTracker
{
    public interface ICommentRepo
    {
        public IEnumerable<Comment> GetComments(int ticketID);
        public Comment GetCommentById(int id);
    }
}

