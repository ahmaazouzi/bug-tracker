using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using BugTracker.Models;

namespace BugTracker.Dtos
{
    public class TicketUpdateDto
    {
        public string Summary { get; set; }

        public string Description { get; set; }

        public DateTime? DateReported { set; get; }

        public int ReporterID { get; set; }

        public DateTime? DateAssigned { get; set; }

        public int? AssignmentID { get; set; }

        [Required]
        [DefaultValue("todo")]
        [RegularExpression("(?i)todo|(?i)in progress|(?i)done")]
        public string Status { get; set; }

        public bool Active { get; set; }

        public DateTime? DateClosed { get; set; }

        [DisplayFormat(NullDisplayText = "No points?")]
        [Range(1, 25)]
        public byte Points { get; set; }

        public Assignment Assignment { get; set; }

        public Account Reporter { get; set; }

        public int TeamID { get; set; }

        public ICollection<Comment> Comments { get; set; }

        public ICollection<Attachment> Attachments { get; set; }
    }
}
