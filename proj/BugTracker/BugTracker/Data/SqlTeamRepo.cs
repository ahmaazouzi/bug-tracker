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

        public void CreateTeam(Team team)
        {
            if (team == null)
                throw new ArgumentNullException(nameof(team));
            _context.Teams.Add(team);
        }

        public void DeleteTeam(Team team)
        {
            if (team == null)
                throw new ArgumentNullException(nameof(team));
            _context.Teams.Remove(team);
            _context.SaveChanges();
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

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void UpdateTeam(Team team)
        {
            throw new NotImplementedException();
        }
    }
}
