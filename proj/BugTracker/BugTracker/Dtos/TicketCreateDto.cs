using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using BugTracker.Models;

namespace BugTracker.Dtos
{
    public enum Status
    {
        ToDo,
        InProgress,
        Don
    }

    public class TicketTCreateDto
    {
        public string Summary { get; set; }

        public string Description { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime? DateReported { set; get; }

        public int ReporterID { get; set; }

        public DateTime? DateAssigned { get; set; }

        public int? AssignmentID { get; set; }

        public Status Status { get; set; }

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
