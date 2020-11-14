//using System;
//using System.Collections.Generic;
//using BugTracker.Models;

//namespace BugTracker.Data
//{
//    public class MockAccountRepo: IAccountRepo
//    {
//        public void CreateAccount(Account account)
//        {
            
//        }

//        public void DeleteAccount(Account account)
//        {
//            throw new NotImplementedException();
//        }

//        public Account GetAccountById(int id)
//        {
//            return new Account
//            {
//                ID = 1,
//                FirstName = "Ahmed",
//                LastName = "Maghribi",
//                PhotoUrl = "https://avatars3.githubusercontent.com/u/12423336",
//                Email = "a.maa@bugtracker.com",
//                SpiritAnimal = "NAD83",
//                Bio = "The creator of the nonrevolutionary bug tracker",
//                TeamID = 4,
//                //Team = new Team { Name = "BugTracker" },
//                Assignments = new HashSet<Assignment> {
//                    new Assignment(), new Assignment()
//                },
//            };
//        }

//        public IEnumerable<Account> GetAccounts()
//        {
//            return new List<Account>
//            {
//                new Account
//                {
//                    ID = 1,
//                    FirstName = "Ahmed",
//                    LastName = "Maghribi",
//                    PhotoUrl = "https://avatars3.githubusercontent.com/u/12423336",
//                    Email = "a.maa@bugtracker.com",
//                    SpiritAnimal = "NAD83",
//                    Bio = "The creator of the nonrevolutionary bug tracker",
//                    TeamID = 4,
//                    //Team = new Team { Name = "BugTracker" },
//                Assignments = new HashSet<Assignment> {
//                    new Assignment(), new Assignment()
//                }
//                },
//                new Account
//                {
//                    ID = 1,
//                    FirstName = "Ahmed",
//                    LastName = "Maghribi",
//                    PhotoUrl = "https://avatars3.githubusercontent.com/u/12423336",
//                    Email = "a.maa@bugtracker.com",
//                    SpiritAnimal = "NAD83",
//                    Bio = "The creator of the nonrevolutionary bug tracker",
//                    TeamID = 4,
//                    //Team = new Team { Name = "BugTracker" },
//                    Assignments = new HashSet<Assignment> {
//                        new Assignment(), new Assignment()
//                    }
//                },
//                new Account
//                {
//                    ID = 1,
//                    FirstName = "Ahmed",
//                    LastName = "Maghribi",
//                    PhotoUrl = "https://avatars3.githubusercontent.com/u/12423336",
//                    Email = "a.maa@bugtracker.com",
//                    SpiritAnimal = "NAD83",
//                    Bio = "The creator of the nonrevolutionary bug tracker",
//                    TeamID = 4,
//                    //Team = new Team { Name = "BugTracker" },
//                    Assignments = new HashSet<Assignment> {
//                        new Assignment(), new Assignment()
//                    }
//                }
//            };
//        }

//        public void SaveChanges()
//        {
//            throw new NotImplementedException();
//        }

//        public void UpdateAccount(Account account)
//        {
//            throw new NotImplementedException();
//        }

//        bool IAccountRepo.SaveChanges()
//        {
//            throw new NotImplementedException();
//        }
//    }
//}