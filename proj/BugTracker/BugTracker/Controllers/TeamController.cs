using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using BugTracker.Models;
using BugTracker.Data;
using BugTracker.Dtos;
using AutoMapper;

namespace BugTracker.Controllers
{
    [Route("")]
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

        [HttpGet("teams")]
        public ActionResult<IEnumerable<Team>> GetTeams()
        {
            var teams = _repository.GetTeams();
            return Ok(_mapper.Map<IEnumerable<TeamReadDto>>(teams));
        }

        [HttpGet("team{id}/team", Name = "GetTeamById")]
        public ActionResult<TeamReadDto> GetTeamById(int id)
        {
            var team = _repository.GetTeamById(id);
            return Ok(_mapper.Map<TeamReadDto>(team));
        }

        [HttpPost("teams")]
        public ActionResult<TeamReadDto> CreateTeam(TeamCreateDto teamCreateDto)
        {
            var teamModel = _mapper.Map<Team>(teamCreateDto);
            _repository.CreateTeam(teamModel);
            _repository.SaveChanges();

            var teamReadDto = _mapper.Map<TeamReadDto>(teamModel);

            return CreatedAtRoute(nameof(GetTeamById),
                new { ID = teamReadDto.ID }, teamReadDto);
        }
    }
}
