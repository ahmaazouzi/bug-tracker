using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using BugTracker.Data;
using AutoMapper;
using BugTracker.Dtos;
using System.Linq;

namespace BugTracker.Controllers
{
    [Route("team{teamID}")]
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
        [HttpGet("activetickets")]
        public ActionResult <IEnumerable<TicketReadDto>> GetTickets(int teamID)
        {
            var tickets = _repository.GetTickets().Where(t => t.TeamID
            == teamID && t.Active);
            return Ok(_mapper.Map<IEnumerable<TicketReadDto>>(tickets));
        }

        [HttpGet("tickets")]
        public ActionResult<IEnumerable<TicketReadDto>> GetAllTickets(int teamID)
        {
            var tickets = _repository.GetTickets().Where(t => t.TeamID
            == teamID);
            return Ok(_mapper.Map<IEnumerable<TicketReadDto>>(tickets));
        }

        [HttpGet("tickets/{id}")]
        public ActionResult<TicketReadDto> GetTicketById(int id)
        {
            var ticket = _repository.GetTicketById(id);
            return Ok(_mapper.Map<TicketReadDto>(ticket));
        }
    }
}
