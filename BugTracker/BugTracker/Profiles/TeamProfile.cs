using AutoMapper;
using BugTracker.Dtos;
using BugTracker.Models;

namespace BugTracker.Profiles
{
    public class TeamProfile: Profile
    {
        public TeamProfile()
        {
            CreateMap<Team, TeamReadDto>();
        }
    }
}
