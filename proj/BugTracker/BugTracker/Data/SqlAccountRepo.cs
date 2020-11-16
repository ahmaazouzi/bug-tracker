using System;
using System.Collections.Generic;
using System.Linq;
using BugTracker.Models;

namespace BugTracker.Data
{
    public class SqlAccountRepo : IAccountRepo

    {
        private readonly BugTrackerContext _context;

        public SqlAccountRepo(BugTrackerContext context)
        {
            _context = context;
        }

        public Account GetAccountById(int id)
        {
            var account = _context.Accounts.FirstOrDefault(a => a.ID == id);
            if (account != null)
            {
                GetAssigned(account);
                _context.Entry(account).Collection(v => v.AccountTeam).Load();
                account.AccountTeam.ForEach(a => _context.Entry(a).Reference(a => a.Team).Load());

                account.AccountTeam.ForEach(a => a.Account = null);
                account.Assignments.ToList().ForEach(a => a.Account.AccountTeam = null);

            }

            return account;
        }


        public IEnumerable<Account> GetAccounts()
        {
            return _context.Accounts.ToList();
        }

        private void GetAssigned(Account account)
        {
            if (account != null)
                _context.Entry(account).Collection(a => a.Assignments).Load();
        }

        public void CreateAccount(Account account)
        {
            if (account == null)
                throw new ArgumentNullException(nameof(account));

            _context.Accounts.Add(account);
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void DeleteAccount(Account account)
        {
            if (account == null)
                throw new ArgumentNullException(nameof(account));
            _context.Accounts.Remove(account);
            _context.SaveChanges();
        }

        public void UpdateAccount(Account account)
        {
            throw new NotImplementedException();
        }
    }
}
