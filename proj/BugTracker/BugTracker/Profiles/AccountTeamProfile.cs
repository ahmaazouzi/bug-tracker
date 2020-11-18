using AutoMapper;
using BugTracker.Models;
using BugTracker.Dtos;

namespace BugTracker.Profiles
{
    public class AccountTeamProfile: Profile
    {
        public AccountTeamProfile()
        {
            CreateMap<AccountTeamCreateDto, AccountTeam>();
            CreateMap<AccountTeam, AccountTeamCreateDto>();
            CreateMap<AccountTeamReadDto, AccountTeam>();
            CreateMap<AccountTeam, AccountTeamReadDto>();
        }
    }
}
