using System;
using System.Collections.Generic;
using BugTracker.Models;

namespace BugTracker.Dtos
{
    public class TicketReadDto
    {
        public int ID { get; set; }

        public string Summary { get; set; }

        public string Description { get; set; }

        public DateTime DateReported { get; set; }

        public int ReporterID { get; set; }

        public DateTime DateAssigned { get; set; }

        public int AssignmentID { get; set; }

        public string Status { get; set; }

        public bool Active { get; set; }

        public DateTime DateClosed { get; set; }

        public byte Points { get; set; }

        public int TeamID { get; set; }

        public Assignment Assignment { get; set; }

        public Account Reporter { get; set; }

        public ICollection<Comment> Comments { get; set; }

        public ICollection<Attachment> Attachments { get; set; }
    }
}
