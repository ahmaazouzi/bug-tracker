using AutoMapper;
using BugTracker.Dtos;
using BugTracker.Models;

namespace BugTracker.Profiles
{
    public class TicketProfile: Profile
    {
        public TicketProfile()
        {
            CreateMap<Ticket, TicketReadDto>();
            CreateMap<TicketTCreateDto, Ticket>();
        }
    }
}
