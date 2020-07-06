using AutoMapper;
using BugTracker.Models;
using BugTracker.Dtos;

namespace BugTracker.Profiles
{
    public class AssignmentProfile: Profile
    {
        public AssignmentProfile()
        {
            CreateMap<Assignment, AssignmentReadDto>();
            CreateMap<AssignmentCreateDto, Assignment>();
            CreateMap<AssignmentUpdateDto, Assignment>();
            CreateMap<Assignment, AssignmentUpdateDto>();
        }
    }
}
