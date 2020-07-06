using System;
namespace BugTracker.Dtos
{
    public class AttachmentReadDto
    {
        public int ID { get; set; }

        public string Url { get; set; }

        public int TicketID { get; set; }
    }
}
