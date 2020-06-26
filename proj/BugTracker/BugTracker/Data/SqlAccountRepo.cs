using System;
using System.Collections.Generic;
using System.Linq;
using BugTracker.Models;

namespace BugTracker.Data
{
    public class SqlAccountRepo: IAccountRepo

    {
        private readonly BugTrackerContext _context;

        public SqlAccountRepo(BugTrackerContext context)
        {
            _context = context;
        }

        public Account GetAccountById(int id)
        {
            return _context.Accounts.FirstOrDefault(a => a.ID == id);
        }

        public IEnumerable<Account> GetAccounts()
        {
            return _context.Accounts.ToList();
        }
    }
}
