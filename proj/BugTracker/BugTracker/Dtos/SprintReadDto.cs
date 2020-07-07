using System;
using System.Collections.Generic;
using BugTracker.Models;

namespace BugTracker.Dtos
{
    public class SprintReadDto
    {
        public int ID { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public string Goals { get; set; }

        public string Retrospective { get; set; }

        public int Points { get; set; }

        public int PointsEliminated { get; set; }

        public ICollection<Ticket> AssignedTickets { get; set; }
    }
}
