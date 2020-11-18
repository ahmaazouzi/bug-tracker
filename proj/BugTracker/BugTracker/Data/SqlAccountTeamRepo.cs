using System;
using System.Collections.Generic;
using System.Linq;
using BugTracker.Models;

namespace BugTracker.Data
{
    public class SqlAccountTeamRepo : IAccountTeamRepo

    {
        private readonly BugTrackerContext _context;

        public SqlAccountTeamRepo(BugTrackerContext context)
        {
            _context = context;
        }

        public AccountTeam GetAccountTeamById(int teamID, int accountID)
        {
            var accountTeam = _context.AccountTeam.FirstOrDefault(at => at.TeamID == teamID && at.AccountID == accountID);

            return accountTeam;
        }


        public void CreateAccountTeam(AccountTeam accountTeam)
        {
            if (accountTeam == null)
                throw new ArgumentNullException(nameof(accountTeam));

            _context.AccountTeam.Add(accountTeam);
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void DeleteAccountTeam(AccountTeam accountTeam)
        {
            if (accountTeam == null)
                throw new ArgumentNullException(nameof(accountTeam));
            _context.AccountTeam.Remove(accountTeam);
            _context.SaveChanges();
        }
    }
}
