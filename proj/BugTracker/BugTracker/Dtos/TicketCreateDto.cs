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
        public TicketTCreateDto()
        {
            var date = DateTime.Now;
            this.DateReported = new DateTime(date.Year,
                date.Month,
                date.Day,
                date.Hour,
                date.Minute,
                date.Second);
        }

        [Required]
        public string Summary { get; set; }

        public string Description { get; set; }

        public DateTime? DateReported { set; get; }

        [Required]
        public int ReporterID { get; set; }

        public DateTime? DateAssigned { get; set; }

        public int? AssignmentID { get; set; }

        [Required]
        [DefaultValue(Status.ToDo)]
        public Status Status { get; set; }

        [DefaultValue(true)]
        public bool Active { get; set; }

        public DateTime? DateClosed { get; set; }

        [Required]
        [Range(1, 25)]
        public byte Points { get; set; }

        public Assignment Assignment { get; set; }

        [Required]
        public int TeamID { get; set; }

        public Account Reporter { get; set; }

        public ICollection<Comment> Comments { get; set; }

        public ICollection<Attachment> Attachments { get; set; }
    }
}
