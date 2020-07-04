using System;
using BugTracker.Models;

namespace BugTracker.Dtos
{
    public class AssignmentReadDto
    {
        public int ID { get; set; }

        public int TicketID { get; set; }
        public int AccountID { get; set; }

        public Account Account { get; set; }
        public Ticket Ticket { get; set; }
    }
}
