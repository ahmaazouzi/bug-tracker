using BugTracker.Models;
using System.Collections.Generic;

namespace BugTracker
{
    public interface IAttachmentRepo
    {
        IEnumerable<Attachment> GetAttachments();
        Attachment GetAttachmentById(int id);
        public void CreateAttachment(Attachment attachment);
        public void DeleteAttachment(Attachment attachment);
        public bool SaveChanges();
    }
}
