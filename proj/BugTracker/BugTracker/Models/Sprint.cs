using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace BugTracker.Models
{
    public class Sprint
    {
        private int totalPoints;

        public int ID { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        [MaxLength(30000)]
        public string Goals { get; set; }

        [MaxLength(30000)]
        public string Retrospective { get; set; }

        public int Points { get; set; }
        //{
        //    set {
        //        this.totalPoints = this.AssignedTickets.Sum(a => a.Points);
        //    }
        //    get 
        //    {
        //        return totalPoints;
        //    }
        //}

        public int TeamID  { get; set; }

        public int PointsEliminated { get; set; }

        public ICollection<Ticket> AssignedTickets { get; set; }
    }
}