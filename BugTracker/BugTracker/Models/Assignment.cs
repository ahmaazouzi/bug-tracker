using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BugTracker.Models
{
    public class Assignment
    {
        public int ID { get; set; }

        [ForeignKey("TicketID")]
        public int TicketID { get; set; }
        public int AccountID { get; set; }

        public Ticket Ticket { get; set; }
        public Account Account { get; set; }
    }
}
