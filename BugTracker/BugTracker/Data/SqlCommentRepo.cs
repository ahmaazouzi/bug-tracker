using System;
using System.Collections.Generic;
using BugTracker.Models;

namespace BugTracker.Data
{
    public class SqlCommentRepo: ICommentRepo
    {
        public SqlCommentRepo()
        {
        }

        public Comment GetCommentById(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Comment> GetComments()
        {
            throw new NotImplementedException();
        }
    }
}
