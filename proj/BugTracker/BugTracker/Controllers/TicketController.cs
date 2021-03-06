﻿using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using BugTracker.Data;
using AutoMapper;
using BugTracker.Dtos;
using System.Linq;
using BugTracker.Models;
using Microsoft.AspNetCore.JsonPatch;

namespace BugTracker.Controllers
{
    [Route("tickets")]
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

        //[HttpGet("activetickets")]
        //public ActionResult <IEnumerable<TicketReadDto>> GetTickets(int teamID)
        //{
        //    var tickets = _repository.GetTickets().Where(t => t.TeamID
        //    == teamID && t.Active);
        //    return Ok(_mapper.Map<IEnumerable<TicketReadDto>>(tickets));
        //}

        [HttpGet]
        public ActionResult<IEnumerable<TicketReadDto>> GetAllTickets(int teamID)
        {
            var tickets = _repository.GetTickets();

            return Ok(_mapper.Map<IEnumerable<TicketReadDto>>(tickets));
        }

        [HttpGet("{id}", Name = "GetTicketById")]
        public ActionResult<TicketReadDto> GetTicketById(int id)
        {
            var ticket = _repository.GetTicketById(id);
            if (ticket == null)
                return NotFound();

            return Ok(_mapper.Map<TicketReadDto>(ticket));
        }

        [HttpPost]
        public ActionResult<TicketReadDto> CreateTicket(TicketTCreateDto ticketTCreateDto)
        {
            var ticketModel = _mapper.Map<Ticket>(ticketTCreateDto);
            _repository.CreateTicket(ticketModel);
            _repository.SaveChanges();

            var ticketReadDto = _mapper.Map<TicketReadDto>(ticketModel);

            return CreatedAtRoute(nameof(GetTicketById),
                new { ID = ticketReadDto.ID }, ticketReadDto);        
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteTicket(int id)
        {
            var ticket = _repository.GetTicketById(id);
            if (ticket == null)
                return NotFound();

            _repository.DeleteTicket(ticket);
            _repository.SaveChanges();

            return NoContent();
        }

        [HttpPatch("{id}")]
        public ActionResult UpdateTicket(int id, JsonPatchDocument<TicketUpdateDto> jsonPatchDocument)
        {
            var ticket = _repository.GetTicketById(id);
            if (ticket == null)
                return NotFound();

            var ticketToPatch = _mapper.Map<TicketUpdateDto>(ticket);
            jsonPatchDocument.ApplyTo(ticketToPatch, ModelState);

            if (!TryValidateModel(ticketToPatch))
                return ValidationProblem(ModelState);

            _mapper.Map(ticketToPatch, ticket);
            _repository.SaveChanges();

            return NoContent();
        }
    }
}
