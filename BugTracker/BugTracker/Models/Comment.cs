using System;
using System.ComponentModel.DataAnnotations;

namespace BugTracker.Models
{
    public class Comment
    {
        public int ID { get; set; }

        public int CommenterID { get; set; }

        public int TicketID { get; set; }

        [MaxLength(16000)]
        public string Payload { get; set; }

        public DateTime Date { get; set; }


        public Account Commenter { get; set; }

        public Ticket Ticket { get; set; }
    }
}
