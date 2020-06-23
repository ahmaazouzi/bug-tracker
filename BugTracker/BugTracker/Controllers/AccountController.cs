using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using BugTracker.Models;
using BugTracker.Data;

namespace BugTracker.Controllers
{
    [Route("bugtracker/accounts")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly MockAccountRepo _repository = new MockAccountRepo();

        [HttpGet]
        public ActionResult<IEnumerable<Account>> GetAccounts()
        {
            var accounts = _repository.GetAccounts();
            return Ok(accounts);
        }

        [HttpGet("{id}")]
        public ActionResult<Account> GetAccountById(int id)
        {
            var account = _repository.GetAccountById(id);
            return Ok(account);
        }
    }
}
