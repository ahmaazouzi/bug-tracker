using System;
using System.Collections.Generic;
using BugTracker.Dtos;
using BugTracker.Models;

namespace BugTracker.Data
{
    public interface IAccountTeamRepo
    {
        
        AccountTeam GetAccountTeamById(int teamID, int accountID);
        void CreateAccountTeam(AccountTeam accountTeam);
        void DeleteAccountTeam(AccountTeam accountTeam);
        bool SaveChanges();
    }

}