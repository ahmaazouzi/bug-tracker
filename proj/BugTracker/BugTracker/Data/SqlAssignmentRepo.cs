using System;
using System.Collections.Generic;
using System.Linq;
using BugTracker.Models;

namespace BugTracker.Data
{
    public class SqlAssignmentRepo : IAssignmentRepo
    {
        private readonly BugTrackerContext _context;

        public SqlAssignmentRepo(BugTrackerContext context)
        {
            _context = context;
        }

        public void CreateAssignment(Assignment assignment)
        {
            if (assignment == null)
                throw new ArgumentNullException(nameof(assignment));
            _context.Assignments.Add(assignment);
        }

        public void DeleteAssignment(Assignment assignment)
        {
            if (assignment == null)
                throw new ArgumentNullException(nameof(assignment));
            _context.Assignments.Remove(assignment);
        }


        public void EditAssignment(Assignment assignment)
        {
            throw new NotImplementedException();
        }

        public Assignment GetAssignmentById(int id)
        {
            return _context.Assignments.FirstOrDefault(c => c.ID == id);
        }

        public IEnumerable<Assignment> GetAssignments(int ticketID)
        {
            return _context.Assignments.Where(c => c.TicketID == ticketID);
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
