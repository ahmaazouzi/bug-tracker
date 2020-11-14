using System;
namespace BugTracker.Models
{
    public class AccountTeam
    {
        public int AccountID { get; set; }
        public Account Account { get; set; }

        public int TeamID { get; set; }
        public Team Team { get; set; }
    }
}
