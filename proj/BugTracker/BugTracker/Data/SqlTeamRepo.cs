﻿using System;
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

        public IEnumerable<Team> GetTeams()
        {
            return _context.Teams.Include(t => t.AccountTeams).ThenInclude(a => a.Team);
        }

        public Team GetTeamById(int id)
        {
            var team = _context.Teams.FirstOrDefault(t => t.ID == id);
            if (team != null)
            {

                _context.Entry(team).Collection(v => v.AccountTeams).Load();
                _context.Entry(team).Collection(t => t.Tickets).Load();
                team.AccountTeams.ForEach(a => _context.Entry(a).Reference(a => a.Account).Load());

                team.AccountTeams.ForEach(a => a.Team = null);
                team.Tickets.ToList().ForEach(t => t.Reporter = null);
                

            }

            return team;
        }

        public void CreateTeam(Team team)
        {
            if (team == null)
                throw new ArgumentNullException(nameof(team));
            _context.Teams.Add(team);
        }

        public void UpdateTeam(Team team)
        {
            throw new NotImplementedException();
        }

        public void DeleteTeam(Team team)
        {
            if (team == null)
                throw new ArgumentNullException(nameof(team));
            _context.Teams.Remove(team);
            _context.SaveChanges();
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
