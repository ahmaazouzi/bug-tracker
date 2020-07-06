using System;
using AutoMapper;
using BugTracker.Models;
using BugTracker.Dtos;

namespace BugTracker.Profiles
{
    public class SprintProfile: Profile
    {
        public SprintProfile()
        {
            CreateMap<Sprint, SprintReadDto>();
            CreateMap<SprintCreateDto, Sprint>();
            CreateMap<SprintUpdateDto, Sprint>();
            CreateMap<Sprint, SprintUpdateDto>();
        }
    }
}
