using System;
using System.Collections.Generic;
using System.Linq;
using BugTracker.Models;

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
            return _context.Teams.FirstOrDefault(t => t.ID == id);
        }

        public IEnumerable<Team> GetTeams()
        {
            return _context.Teams.ToList() ;
        }
    }
}
