using AutoMapper;
using BugTracker.Models;
using BugTracker.Dtos;

namespace BugTracker.Profiles
{
    public class AttachmentProfile: Profile
    {
        public AttachmentProfile()
        {
            CreateMap<Attachment, AttachmentReadDto>();
            CreateMap<AttachmentCreateDto, Attachment>();
        }
    }
}
