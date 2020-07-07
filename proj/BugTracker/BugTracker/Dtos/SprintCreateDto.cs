using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using BugTracker.Models;

namespace BugTracker.Dtos
{
    public class SprintCreateDto
    {
        public int ID { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        [MaxLength(30000)]
        public string Goals { get; set; }

        [Required]
        public int TeamID { get; set; }

        public ICollection<Ticket> AssignedTickets { get; set; }
    }
}
