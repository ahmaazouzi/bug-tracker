using System.Collections.Generic;
using BugTracker.Models;

namespace BugTracker.Data
{
    public interface ISprintRepo
    {
        IEnumerable<Sprint> GetSprints();
        Sprint GetSprintById(int id);
        void CreateSprint(Sprint team);
        void UpdateSprint(Sprint team);
        void DeleteSprint(Sprint team);

        bool SaveChanges();
    }
}