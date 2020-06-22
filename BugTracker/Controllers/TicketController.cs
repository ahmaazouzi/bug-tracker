using System;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using BugTracker.Models;
using BugTracker.Data;

namespace BugTracker.Controllers
{
    [Route("api/tickets")]
    [ApiController]
    public class TicketController: ControllerBase
    {
        private readonly MockTicketRepo _repository = new MockTicketRepo();
        [HttpGet]
        public ActionResult <IEnumerable<Ticket>> GetAllTickets()
        {
            var tickets = _repository.GetTickets();
            return Ok(tickets);
        }

        [HttpGet("{id}")]
        public ActionResult<Ticket> GetTicketById(int id)
        {
            var ticket = _repository.GetTicketById(id);
            return Ok(ticket);
        }
    }
}
