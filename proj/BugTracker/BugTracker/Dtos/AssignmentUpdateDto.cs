using System;
namespace BugTracker.Dtos
{
    public class AssignmentUpdateDto
    {
        public int ID { get; set; }

        public int TicketID { get; set; }

        public int AccountID { get; set; }
    }
}
