using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using BugTracker.Models;

namespace BugTracker.Dtos
{
    public class SprintUpdateDto
    {
        public int ID { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        [MaxLength(30000)]
        public string Goals { get; set; }

        [MaxLength(30000)]
        public string Retrospective { get; set; }

        public int PointsEliminated { get; set; }

        public ICollection<Ticket> AssignedTickets { get; set; }
    }
}
