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

            //var accountReadDto = _mapper.Map<AccountReadDto>(accountModel);

            return NoContent(); //CreatedAtRoute(nameof(GetAccountById),
               // new { ID = accountReadDto.ID }, accountReadDto);
        }

        [HttpDelete("{teamid}/{accountid}")]
        public ActionResult DeleteAccount(AccountTeamCreateDto accountTeamCreateDto)
        {
            var accountTeam = _repository.GetAccountTeamById(accountTeamCreateDto.TeamID, accountTeamCreateDto.AccountID);
            if (accountTeam == null)
                return NotFound();

            _repository.DeleteAccountTeam(accountTeam);
            _repository.SaveChanges();

            return NoContent();
        }
    }
}
