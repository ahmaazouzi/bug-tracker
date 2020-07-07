using System;
using System.Collections.Generic;
using System.Linq;
using BugTracker.Models;

namespace BugTracker.Data
{
    public class SqlSprintRepo : ISprintRepo
    {
        private readonly BugTrackerContext _context;

        public SqlSprintRepo(BugTrackerContext context)
        {
            _context = context;
        }

        public IEnumerable<Sprint> GetSprints()
        {
            return _context.Sprints.ToList();
        }

        public Sprint GetSprintById(int id)
        {
            var sprint = _context.Sprints.FirstOrDefault(t => t.ID == id);
            if (sprint != null)
            {
                _context.Entry(sprint).Collection(s => s.AssignedTickets).Load();
            }

            return sprint;
        }

        public void CreateSprint(Sprint sprint)
        {
            if (sprint == null)
                throw new ArgumentNullException(nameof(sprint));
            _context.Sprints.Add(sprint);
        }

        public void UpdateSprint(Sprint sprint)
        {
            throw new NotImplementedException();
        }

        public void DeleteSprint(Sprint sprint)
        {
            if (sprint == null)
                throw new ArgumentNullException(nameof(sprint));
            _context.Sprints.Remove(sprint);
            _context.SaveChanges();
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
