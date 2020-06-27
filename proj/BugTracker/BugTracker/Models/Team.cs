﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BugTracker.Models
{
    public class Team
    {
        public int ID { get; set; }

        [Required]
        public string Name { get; set; }

        public ICollection<Account> Members { get; set; }
        public ICollection<Ticket> Tickets { get; set; }
    }
}