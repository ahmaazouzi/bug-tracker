using AutoMapper;
using BugTracker.Models;
using BugTracker.Dtos;

namespace BugTracker.Profiles
{
    public class AccountProfile: Profile
    {
        public AccountProfile()
        {
            CreateMap<Account, AccountReadDto>();
        }
    }
}
