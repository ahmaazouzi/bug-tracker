using System;
using System.Collections.Generic;
using System.Linq;
using BugTracker.Models;

namespace BugTracker.Data
{
    public class SqlAttachmentRepo : IAttachmentRepo
    {
        private readonly BugTrackerContext _context;

        public SqlAttachmentRepo(BugTrackerContext context)
        {
            _context = context;
        }

        public Attachment GetAttachmentById(int id)
        {
            return _context.Attachments.FirstOrDefault(a => a.ID == id);
        }

        public IEnumerable<Attachment> GetAttachments()
        {
            return _context.Attachments.ToList();
        }
    }
}
