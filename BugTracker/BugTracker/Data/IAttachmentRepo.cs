using BugTracker.Models;
using System.Collections.Generic;

namespace BugTracker
{
    public interface IAttachmentRepo
    {
        IEnumerable<Attachment> GetAttachments();
        Attachment GetAttachmentById(int id);
    }
}
