using System.Collections.Generic;
using BugTracker.Models;

namespace BugTracker
{
    public interface IComment
    {
        public IEnumerable<Comment> GetComments();
        public Comment GetCommentById(int id);
    }
}

