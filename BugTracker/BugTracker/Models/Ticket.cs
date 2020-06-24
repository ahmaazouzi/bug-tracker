using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BugTracker.Models
{
    public enum Status
    {
        ToDo, InProgress, Done
    }

    public class Ticket
    {
        public int ID { get; set; }

        [MaxLength(3000)]
        [Required]
        public string Summary { get; set; }

        [MaxLength(30000)]
        [DisplayFormat(NullDisplayText = "No grade")]
        public string Description { get; set; }

        [Required]
        public DateTime? DateReported { get; set; }

        [Required]
        public int ReporterID { get; set; }

        public DateTime? DateAssigned { get; set; }

        public int AssignmentID { get; set; }

        public Status Status { get; set; }

        public bool Active { get; set; }

        public DateTime? DateClosed { get; set; }

        public byte Points { get; set; }

        [DisplayFormat(NullDisplayText = "Not assigned yet")]

        public Assignment Assignment { get; set; }

        [Required]
        public Account Reporter { get; set; }

        public ICollection<Comment> Comments { get; set; }

        public ICollection<Attachment> Attachments { get; set; }
    }
}
