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

        public Comment GetCommentById(int id)
        {
            return _context.Comments.FirstOrDefault(c => c.ID == id);
        }

        public IEnumerable<Comment> GetComments()
        {
            return _context.Comments.ToList();
        }
    }
}
