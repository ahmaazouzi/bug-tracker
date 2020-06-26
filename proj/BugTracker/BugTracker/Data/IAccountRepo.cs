using System;
using System.Collections.Generic;
using BugTracker.Models;

namespace BugTracker.Data
{
    public interface IAccountRepo
    {
        IEnumerable<Account> GetAccounts();
        Account GetAccountById(int id);
    }
}
