using System.Collections.Generic;
using BugTracker.Models;

namespace BugTracker
{
    public interface IAssignmentRepo
    {
        public IEnumerable<Assignment> GetAssignments(); // (int ticketID);
        public Assignment GetAssignmentById(int id);
        public void CreateAssignment(Assignment assignment);
        public void EditAssignment(Assignment assignment);
        public void DeleteAssignment(Assignment assignment);
        public bool SaveChanges();
    }
}