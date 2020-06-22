using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BugTracker.Models
{
    public class Ticket
    {
        [Key]
        public int TicketId { get; set; }

        [Required]
        public string Summary { get; set; }

        [Required]
        public string Description { get; set; }

        
        public string Status { get; set; }

        public byte Active { get; set; }

        public DateTime? DateReported { get; set; }

        public DateTime? DateAssigned { get; set; }

        public DateTime? DateClosed { get; set; }

        [ForeignKey("dadaism")]
        public int ReporterRef { get; set; }

        public Account Reporter { get; set; }

        [ForeignKey("dadaism")]
        public int AssigneeRef { get; set; }

        public Account Assignee { get; set; }

        public byte Points { get; set; }

        public int? Tag { get; set; }
    }
}
