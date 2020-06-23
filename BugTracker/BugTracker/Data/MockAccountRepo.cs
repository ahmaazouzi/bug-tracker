﻿using System;
using System.Collections.Generic;
using BugTracker.Models;

namespace BugTracker.Data
{
    public class MockAccountRepo: IAccountRepo
    {
        public Account GetAccountById(int id)
        {
            return new Account
            {
                ID = 1,
                FirstName = "Ahmed",
                LastName = "Maghribi",
                PhotoUrl = "https://avatars3.githubusercontent.com/u/12423336",
                Email = "a.maa@bugtracker.com",
                SpiritAnimal = "NAD83",
                Bio = "The creator of the nonrevolutionary bug tracker",
                TeamID = 4,
                Team = new Team { Name = "BugTracker" },
                TicketsAssigned = new HashSet<Ticket> {
                    new Ticket(), new Ticket()
                }
                ,
                TicketsReported = new HashSet<Ticket> {
                    new Ticket(), new Ticket()
                }
            };
        }

        public IEnumerable<Account> GetAccounts()
        {
            return new List<Account>
            {
                new Account
                {
                    ID = 1,
                    FirstName = "Ahmed",
                    LastName = "Maghribi",
                    PhotoUrl = "https://avatars3.githubusercontent.com/u/12423336",
                    Email = "a.maa@bugtracker.com",
                    SpiritAnimal = "NAD83",
                    Bio = "The creator of the nonrevolutionary bug tracker",
                    TeamID = 4,
                    Team = new Team { Name = "BugTracker" },
                    TicketsAssigned = new HashSet<Ticket> {
                        new Ticket(), new Ticket()
                    }
                    ,
                    TicketsReported = new HashSet<Ticket> {
                        new Ticket(), new Ticket()
                    }
                },
                new Account
                {
                    ID = 1,
                    FirstName = "Ahmed",
                    LastName = "Maghribi",
                    PhotoUrl = "https://avatars3.githubusercontent.com/u/12423336",
                    Email = "a.maa@bugtracker.com",
                    SpiritAnimal = "NAD83",
                    Bio = "The creator of the nonrevolutionary bug tracker",
                    TeamID = 4,
                    Team = new Team { Name = "BugTracker" },
                    TicketsAssigned = new HashSet<Ticket> {
                        new Ticket(), new Ticket()
                    }
                    ,
                    TicketsReported = new HashSet<Ticket> {
                        new Ticket(), new Ticket()
                    }
                },
                new Account
                {
                    ID = 1,
                    FirstName = "Ahmed",
                    LastName = "Maghribi",
                    PhotoUrl = "https://avatars3.githubusercontent.com/u/12423336",
                    Email = "a.maa@bugtracker.com",
                    SpiritAnimal = "NAD83",
                    Bio = "The creator of the nonrevolutionary bug tracker",
                    TeamID = 4,
                    Team = new Team { Name = "BugTracker" },
                    TicketsAssigned = new HashSet<Ticket> {
                        new Ticket(), new Ticket()
                    }
                    ,
                    TicketsReported = new HashSet<Ticket> {
                        new Ticket(), new Ticket()
                    }
                }
            };
        }

    }
}