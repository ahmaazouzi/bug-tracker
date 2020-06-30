using System;
using System.Collections.Generic;
using BugTracker.Models;

namespace BugTracker.Data
{
    public interface IAccountRepo
    {
        IEnumerable<Account> GetAccounts();
        Account GetAccountById(int id);
        void CreateAccount(Account account);
        void UpdateAccount(Account account);
        void DeleteAccount(Account account);

        bool SaveChanges();
    }

}
