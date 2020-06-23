using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BugTracker.Models
{
    public class Ticket
    {
        public int ID { get; set; }

        [MaxLength(3000)]
        [Required]
        public string Summary { get; set; }

        [MaxLength(30000)]
        [Required]
        public string Description { get; set; }

        [Required]
        public DateTime? DateReported { get; set; }

        [Required]
        public int ReporterID { get; set; }

        public DateTime? DateAssigned { get; set; }

        public int AssigneeID { get; set; }

        public enum Status
        {
            ToDO, InProgress, Done
        }

        public bool Active { get; set; }

        public DateTime? DateClosed { get; set; }

        public byte Points { get; set; }

        public Account Assignee { get; set; }

        [Required]
        public Account Reporter { get; set; }

        public ICollection<Comment> Comments { get; set; }
    }
}
