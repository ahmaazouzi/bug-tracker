using System.Collections.Generic;
using BugTracker.Models;

namespace BugTracker.Data
{
    public interface ITeamRepo
    {
        IEnumerable<Team> GetTeams();
        Team GetTeamById(int id);
    }
}
