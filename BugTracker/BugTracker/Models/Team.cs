using System;
using System.Collections.Generic;

namespace BugTracker.Models
{
    public class Team
    {
        public int ID { get; set; }
        public string Name { get; set; }

        public ICollection<Account> Members { get; set; }
        public ICollection<Ticket> Tickets { get; set; }
    }
}
