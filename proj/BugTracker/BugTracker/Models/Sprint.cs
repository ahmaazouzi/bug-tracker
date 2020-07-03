using System;
using System.Collections.Generic;

namespace BugTracker.Models
{
    public class Sprint
    {
        public int ID { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Goals { get; set; }
        public string Retrospective { get; set; }
        public int Points { get; set; }
        public int PointsEliminated { get; set; }
        public ICollection<Ticket> Assignments { get; set; }
    }
}