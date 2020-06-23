using System.Collections.Generic;
using BugTracker.Models;

namespace BugTracker.Data
{
    public interface ITeamRepo
    {
    IEnumerable<Ticket> GetTeams();
    Ticket GetTeamById(int id);
    }
}
