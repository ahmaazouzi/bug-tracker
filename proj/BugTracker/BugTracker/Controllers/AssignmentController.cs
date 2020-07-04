using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using BugTracker.Models;
using BugTracker.Dtos;
using BugTracker.Data;
using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;

namespace BugTracker.Controllers
{
    [Route("assignments")]
    [ApiController]
    public class AssignmentController : ControllerBase
    {
        private readonly IAssignmentRepo _repository;
        private readonly IMapper _mapper;

        public AssignmentController(IAssignmentRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<AssignmentReadDto>> GetAssignments(int ticketID)
        {
            var assignments = _repository.GetAssignments(ticketID);
            return Ok(_mapper.Map<IEnumerable<AssignmentReadDto>>(assignments));
        }

        [HttpGet("{id}", Name = "GetAssignmentById")]
        public ActionResult<AssignmentReadDto> GetAssignmentById(int id)
        {
            var assignment = _repository.GetAssignmentById(id);
            if (assignment != null)
                return Ok(_mapper.Map<AssignmentReadDto>(assignment));
            return NotFound();
        }

        [HttpPost]
        public ActionResult<AssignmentReadDto> CreateAssignment(AssignmentCreateDto assignmentCreateDto)
        {
            var assignmentModel = _mapper.Map<Assignment>(assignmentCreateDto);
            _repository.CreateAssignment(assignmentModel);
            _repository.SaveChanges();

            var assignmentReadDto = _mapper.Map<AssignmentReadDto>(assignmentModel);

            return CreatedAtRoute(nameof(GetAssignmentById),
                new { ID = assignmentReadDto.ID }, assignmentReadDto);
        }

        [HttpPatch("{id}")]
        public ActionResult UpdateAssignment(int id, JsonPatchDocument<AssignmentUpdateDto> jsonPatchDocument)
        {
            var assignment = _repository.GetAssignmentById(id);
            if (assignment == null)
                return NotFound();

            var assignmentToPatch = _mapper.Map<AssignmentUpdateDto>(assignment);
            jsonPatchDocument.ApplyTo(assignmentToPatch, ModelState);

            if (!TryValidateModel(assignmentToPatch))
                return ValidationProblem(ModelState);

            _mapper.Map(assignmentToPatch, assignment);
            _repository.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteAssignment(int id)
        {
            var assignment = _repository.GetAssignmentById(id);
            _repository.DeleteAssignment(assignment);
            _repository.SaveChanges();
            return NoContent();
        }
    }
}
