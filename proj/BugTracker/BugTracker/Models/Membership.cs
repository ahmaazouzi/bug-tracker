using System;
using System.Collections.Generic;

namespace BugTracker.Models
{
    public class Membership
    {
        public int ID { get; set; }

        public int AccountID { get; set; }

        public Account Account { get; set; }

        public ICollection<Team> Teams { get; set; }
    }
}
