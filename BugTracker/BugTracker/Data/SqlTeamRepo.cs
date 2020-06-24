using System;
using System.Collections.Generic;
using BugTracker.Models;

namespace BugTracker.Data
{
    public class SqlTeamRepo: ITeamRepo
    {
        public SqlTeamRepo()
        {
        }

        public Team GetTeamById(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Team> GetTeams()
        {
            throw new NotImplementedException();
        }
    }
}
