using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using BugTracker.Dtos;
using BugTracker.Data;
using AutoMapper;

namespace BugTracker.Controllers
{
    [Route("bugtracker/accounts")]
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

        //private readonly MockAccountRepo _repository = new MockAccountRepo();

        [HttpGet]
        public ActionResult<IEnumerable<AccountReadDto>> GetAccounts(int team)
        {
            var accounts = _repository.GetAccounts();
            return Ok(_mapper.Map<IEnumerable<AccountReadDto>>(accounts));
        }

        [HttpGet("{id}")]
        public ActionResult<AccountReadDto> GetAccountById(int id)
        {
            var account = _repository.GetAccountById(id);
            if (account != null)
                return Ok(_mapper.Map<AccountReadDto>(account));
            return NotFound();
        }
    }
}
