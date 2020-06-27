using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

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
        public string Description { get; set; }

        [Required]
        public DateTime? DateReported { get; set; }

        [Required]
        public int ReporterID { get; set; }

        public DateTime? DateAssigned { get; set; }

        public int? AssignmentID { get; set; }

        [Required]
        public Status Status { get; set; }

        [Required]
        public bool Active { get; set; }

        public DateTime? DateClosed { get; set; }

        [DisplayFormat(NullDisplayText = "No points?")]
        [Range(1,25)]
        public byte Points { get; set; }

        public Assignment Assignment { get; set; }

        public Account Reporter { get; set; }

        public int TeamID { get; set; }

        public ICollection<Comment> Comments { get; set; }

        public ICollection<Attachment> Attachments { get; set; }
    }
}
