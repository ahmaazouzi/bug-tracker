using System;
using System.Collections.Generic;
using BugTracker.Models;

namespace BugTracker.Data
{
    public class MockTeamRepo: ITeamRepo
    {
        public MockTeamRepo()
        {
        }

        public void CreateTeam(Team team)
        {
            throw new NotImplementedException();
        }

        public void DeleteTeam(Team team)
        {
            throw new NotImplementedException();
        }

        public Team GetTeamById(int id)
        {
            return new Team
            {
                ID = 1,
                Members = new HashSet<Account> {
                    new Account(), new Account(), new Account()
                },
                Tickets = new HashSet<Ticket> {
                    new Ticket(), new Ticket(), new Ticket()
                }
            };
        }

        public IEnumerable<Team> GetTeams()
        {
            return new List<Team>
            {
                new Team
                {
                    ID = 1,
                    Members = new HashSet<Account> {
                        new Account(), new Account(), new Account()
                    },
                    Tickets = new HashSet<Ticket> {
                        new Ticket(), new Ticket(), new Ticket()
                    }
                },
                new Team
                {
                    ID = 1,
                    Members = new HashSet<Account> {
                        new Account(), new Account(), new Account()
                    },
                    Tickets = new HashSet<Ticket> {
                        new Ticket(), new Ticket(), new Ticket()
                    }
                },
                new Team
                {
                    ID = 1,
                    Members = new HashSet<Account> {
                        new Account(), new Account(), new Account()
                    },
                    Tickets = new HashSet<Ticket> {
                        new Ticket(), new Ticket(), new Ticket()
                    }
                },

            };
        }

        public bool SaveChanges()
        {
            throw new NotImplementedException();
        }

        public void UpdateTeam(Team team)
        {
            throw new NotImplementedException();
        }
    }
}
