using System;
using BugTracker.Models;

namespace BugTracker.Dtos
{
    public class AccountTeamReadDto
    {
        public int AccountID { get; set; }
        public Account Account { get; set; }

        public int TeamID { get; set; }
        public Team Team { get; set; }
    }
}
