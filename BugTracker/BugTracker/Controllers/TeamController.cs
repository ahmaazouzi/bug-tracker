using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using BugTracker.Models;
using BugTracker.Data;

namespace BugTracker.Controllers
{
    [Route("bugtracker/teams")]
    [ApiController]
    public class TeamController: ControllerBase
    {
        private readonly ITeamRepo _repository;

        public TeamController(ITeamRepo repository)
        {
            _repository = repository;
        }

        //private readonly MockTeamRepo _repository = new MockTeamRepo();

        [HttpGet]
        public ActionResult<IEnumerable<Team>> GetTeams()
        {
            var teams = _repository.GetTeams();
            return Ok(teams);
        }

        [HttpGet("{id}")]
        public ActionResult<Team> GetTeamById(int id)
        {
            var team = _repository.GetTeamById(id);
            return Ok(team);
        }
    }
}
