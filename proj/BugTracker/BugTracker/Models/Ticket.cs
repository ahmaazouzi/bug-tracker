﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BugTracker.Models
{
    public class Ticket
    {
        public Ticket()
        {
            var date = DateTime.Now;
            this.DateReported = new DateTime(date.Year,
                date.Month,
                date.Day,
                date.Hour,
                date.Minute,
                date.Second);
        }

        public int ID { get; set; }

        [MaxLength(3000)]
        [Required]
        public string Summary { get; set; }

        [MaxLength(30000)]
        public string Description { get; set; }

        public DateTime? DateReported { get; set; }

        [Required]
        public int ReporterID { get; set; }

        public DateTime? DateAssigned { get; set; }

        public int? AssignmentID { get; set; }

        [Required]
        [DefaultValue("todo")]
        [RegularExpression("(?i)todo|(?i)in progress|(?i)done")]
        public string Status { get; set; }

        public int SprintID { get; set; }

        public DateTime? DateClosed { get; set; }

        [Required]
        [Range(1,25)]
        public byte Points { get; set; }

        public Assignment Assignment { get; set; }

        [Required]
        public int TeamID { get; set; }

        public Account Reporter { get; set; }

        public ICollection<Comment> Comments { get; set; }

        public ICollection<Attachment> Attachments { get; set; }
    }
}
