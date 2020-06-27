using System;
using System.Collections.Generic;
using System.Linq;
using BugTracker.Models;
using Microsoft.EntityFrameworkCore;

namespace BugTracker.Data
{
    public class SqlTeamRepo: ITeamRepo
    {
        private readonly BugTrackerContext _context;

        public SqlTeamRepo(BugTrackerContext context)
        {
            _context = context;
        }

        public Team GetTeamById(int id)
        {
            var team = _context.Teams.FirstOrDefault(t => t.ID == id);
            _context.Entry(team).Collection(v => v.Members).Load();
            _context.Entry(team).Collection(t => t.Tickets).Load();
            return team;
        }

        public IEnumerable<Team> GetTeams()
        {
            return _context.Teams.ToList() ;
        }
    }
}
