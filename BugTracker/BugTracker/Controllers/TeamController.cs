using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using BugTracker.Models;
using BugTracker.Data;
using BugTracker.Dtos;
using AutoMapper;

namespace BugTracker.Controllers
{
    [Route("bugtracker/teams")]
    [ApiController]
    public class TeamController: ControllerBase
    {
        private readonly ITeamRepo _repository;
        private readonly IMapper _mapper;

        public TeamController(ITeamRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        //private readonly MockTeamRepo _repository = new MockTeamRepo();

        [HttpGet]
        public ActionResult<IEnumerable<Team>> GetTeams()
        {
            var teams = _repository.GetTeams();
            return Ok(_mapper.Map<IEnumerable<TeamReadDto>>(teams));
        }

        [HttpGet("{id}")]
        public ActionResult<TeamReadDto> GetTeamById(int id)
        {
            var team = _repository.GetTeamById(id);
            return Ok(_mapper.Map<TeamReadDto>(team));
        }
    }
}
