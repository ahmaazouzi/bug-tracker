using System;
using System.ComponentModel.DataAnnotations;

namespace BugTracker.Models
{
    public class Comment
    {
        public int ID { get; set; }

        public int AccountID { get; set; }

        public int TicketID { get; set; }

        [MaxLength(16000)]
        [Required]
        public string Payload { get; set; }

        public Account Account { get; set; }

        public DateTime Date { get; set; }
    }
}
