using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using BugTracker.Dtos;
using BugTracker.Data;
using AutoMapper;
using System.Linq;
using BugTracker.Models;
using Microsoft.AspNetCore.JsonPatch;

namespace BugTracker.Controllers
{
    [Route("accounts")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountRepo _repository;
        private readonly IMapper _mapper;

        public AccountController(IAccountRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<AccountReadDto>> GetAccounts(int teamID)
        {
            var accounts = _repository.GetAccounts();
            return Ok(_mapper.Map<IEnumerable<AccountReadDto>>(accounts));
        }

        [HttpGet("{id}", Name = "GetAccountById")]
        public ActionResult<AccountReadDto> GetAccountById(int id)
        {
            var account = _repository.GetAccountById(id);
            if (account != null)
                return Ok(_mapper.Map<AccountReadDto>(account));
            return NotFound();
        }

        [HttpGet("{id}/assigned")]
        public ActionResult<TicketReadDto> GetAssiged(int id)
        {
            var account = _repository.GetAccountById(id);

            if (account != null)
                return Ok(account.Assignments);
            return NotFound();
        }

        [HttpPost]
        public ActionResult<AccountReadDto> CreateAccount(AccountCreateDto accountCreateDto)
        {
            var accountModel = _mapper.Map<Account>(accountCreateDto);
            _repository.CreateAccount(accountModel);
            _repository.SaveChanges();

            var accountReadDto = _mapper.Map<AccountReadDto>(accountModel);

            return CreatedAtRoute(nameof(GetAccountById),
                new { ID = accountReadDto.ID }, accountReadDto);
        }

        [HttpPatch("{id}")]
        public ActionResult UpdateAccount(int id, JsonPatchDocument<AccountUpdateDto> jsonPatchDocument)
        {
            var account = _repository.GetAccountById(id);
            if (account == null)
                return NotFound();

            var accountToPatch = _mapper.Map<AccountUpdateDto>(account);
            jsonPatchDocument.ApplyTo(accountToPatch, ModelState);

            if (!TryValidateModel(accountToPatch))
                return ValidationProblem(ModelState);

            _mapper.Map(accountToPatch, account);
            _repository.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteAccount(int id)
        {
            var account = _repository.GetAccountById(id);
            if (account == null)
                return NotFound();

            _repository.DeleteAccount(account);
            _repository.SaveChanges();

            return NoContent();
        }
    }
}
