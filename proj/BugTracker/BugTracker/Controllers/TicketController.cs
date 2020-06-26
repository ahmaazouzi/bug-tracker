using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using BugTracker.Data;
using AutoMapper;
using BugTracker.Dtos;

namespace BugTracker.Controllers
{
    [Route("bugtracker/tickets")]
    [ApiController]
    public class TicketController: ControllerBase
    {
        private readonly ITicketRepo _repository;
        private readonly IMapper _mapper;

        public TicketController(ITicketRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        //private readonly MockTicketRepo _repository = new MockTicketRepo();

        [HttpGet]
        public ActionResult <IEnumerable<TicketReadDto>> GetTickets()
        {
            var tickets = _repository.GetTickets();
            return Ok(_mapper.Map<IEnumerable<TicketReadDto>>(tickets));
        }

        [HttpGet("{id}")]
        public ActionResult<TicketReadDto> GetTicketById(int id)
        {
            var ticket = _repository.GetTicketById(id);
            return Ok(_mapper.Map<TicketReadDto>(ticket));
        }
    }
}
