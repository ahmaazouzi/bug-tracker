using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using BugTracker.Dtos;
using BugTracker.Data;
using AutoMapper;
using BugTracker.Models;
using Microsoft.AspNetCore.JsonPatch;
using System;

namespace BugTracker.Controllers
{
    [Route("accountteams")]
    [ApiController]
    public class AccountTeamController: ControllerBase
    {
        private readonly IAccountTeamRepo _repository;
        private readonly IMapper _mapper;

        public AccountTeamController(IAccountTeamRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpPost]
        public ActionResult CreateAccountTeam(AccountTeamCreateDto accountTeamCreateDto)
        {
            var accountTeamModel = _mapper.Map<AccountTeam>(accountTeamCreateDto);
            _repository.CreateAccountTeam(accountTeamModel);
            _repository.SaveChanges();

            var accountTeamReadDto = _mapper.Map<AccountTeamReadDto>(accountTeamModel);

            return CreatedAtRoute(nameof(GetAccountTeamById),
               new { TeamID = accountTeamReadDto.TeamID, AccountID = accountTeamReadDto.AccountID }, accountTeamReadDto);
        }

        [HttpGet("{teamid}/{accountid}", Name = "GetAccountTeamById")]
        public ActionResult<AccountReadDto> GetAccountTeamById(int teamid, int accountid)
        {
            var accountTeam = _repository.GetAccountTeamById(teamid, accountid);
            if (accountTeam == null)
                return NotFound();
            return Ok(_mapper.Map<AccountTeamReadDto>(accountTeam));
        }

        [HttpDelete("{teamid}/{accountid}")]
        public ActionResult DeleteAccount(int teamid, int accountid)
        {
            var accountTeam = _repository.GetAccountTeamById(teamid, accountid);
            if (accountTeam == null)
                return NotFound();

            _repository.DeleteAccountTeam(accountTeam);
            _repository.SaveChanges();

            return NoContent();
        }
    }
}
