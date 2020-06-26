using BugTracker.Models;
using BugTracker.Dtos;

using AutoMapper;


namespace BugTracker.Profiles
{
    public class CommentProfile: Profile
    {
        public CommentProfile()
        {
            CreateMap<Comment, CommentReadDto>();
        }
    }
}
