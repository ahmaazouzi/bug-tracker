using System;

namespace BugTracker.Dtos
{
    public class CommentReadDto
    {
        public int ID { get; set; }

        public int AccountID { get; set; }

        public int TicketID { get; set; }

        public string Payload { get; set; }

        public DateTime Date { get; set; }
    }
}
