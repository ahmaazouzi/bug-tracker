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
            var account = _context.Accounts.FirstOrDefault(a => a.ID == id);
            GetAssigned(account);
            return account;
        }

        public IEnumerable<Account> GetAccounts()
        {
            return _context.Accounts.ToList();
        }

        private void GetAssigned(Account account)
        {
            _context.Entry(account).Collection(a => a.Assignments).Load();
        }

        public void CreateAccount(Account account, int teamID)
        {
            if (account == null)
                throw new ArgumentNullException(nameof(account));

            _context.Accounts.Add(account);
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
