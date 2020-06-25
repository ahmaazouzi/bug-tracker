using System.ComponentModel.DataAnnotations;

namespace BugTracker.Models
{
    public class Attachment
    {
        public int ID { get; set; }

        [Required]
        [MaxLength(2500)]
        public string Url { get; set; }

        [Display(Name = "Attac")]
        public int TicketID { get; set; }

        public Ticket Ticket { get; set; }
    }
}
