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

        public Team GetTeamById(int id)
        {
            return new Team
            {
                ID = 1,
                Name = "BugTracker",
                Lead = new Account { FirstName = "Ahmed" },
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
                    Name = "BugTracker",
                    Lead = new Account { FirstName = "Ahmed" },
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
                    Name = "BugTracker",
                    Lead = new Account { FirstName = "Ahmed" },
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
                    Name = "BugTracker",
                    Lead = new Account { FirstName = "Ahmed" },
                    Members = new HashSet<Account> {
                        new Account(), new Account(), new Account()
                    },
                    Tickets = new HashSet<Ticket> {
                        new Ticket(), new Ticket(), new Ticket()
                    }
                },

            };
        }
    }
}
