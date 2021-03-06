﻿using System.Collections.Generic;
using BugTracker.Models;

namespace BugTracker.Dtos
{
    public class TeamReadDto
    {
        public int ID { get; set; }

        public string Name { get; set; }

        public ICollection<AccountTeam> AccountTeams { get; set; }

        public ICollection<Sprint> Sprints { get; set; }

        public ICollection<Ticket> Tickets { get; set; }

    }
}
