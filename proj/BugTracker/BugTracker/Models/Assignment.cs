using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace BugTracker.Models
{
    public class Assignment
    {
        public int ID { get; set; }

        [Required]
        public int TicketID { get; set; }

        [Required]
        public int AccountID { get; set; }

        [Required]
        public Account Account { get; set; }

        public Ticket Ticket { get; set; }
    }
}
