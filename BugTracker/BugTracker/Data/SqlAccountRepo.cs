using System;
using System.Collections.Generic;
using BugTracker.Models;

namespace BugTracker.Data
{
    public class SqlAccountRepo: IAccountRepo
    {
        public SqlAccountRepo()
        {
        }

        public Account GetAccountById(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Account> GetAccounts()
        {
            throw new NotImplementedException();
        }
    }
}
