using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using BugTracker.Models;
using BugTracker.Data;
using BugTracker.Dtos;
using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;

namespace BugTracker.Controllers
{
    [Route("sprints")]
    [ApiController]
    public class SprintController : ControllerBase
    {
        private readonly ISprintRepo _repository;
        private readonly IMapper _mapper;

        public SprintController(ISprintRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Sprint>> GetSprints()
        {
            var sprints = _repository.GetSprints();
            return Ok(_mapper.Map<IEnumerable<SprintReadDto>>(sprints));
        }

        [HttpGet("{id}", Name = "GetSprintById")]
        public ActionResult<SprintReadDto> GetSprintById(int id)
        {
            var sprint = _repository.GetSprintById(id);
            if (sprint == null)
                return NotFound();
            return Ok(_mapper.Map<SprintReadDto>(sprint));
        }

        [HttpPost]
        public ActionResult<SprintReadDto> CreateSprint(SprintCreateDto sprintCreateDto)
        {
            var sprintModel = _mapper.Map<Sprint>(sprintCreateDto);
            _repository.CreateSprint(sprintModel);
            _repository.SaveChanges();

            var sprintReadDto = _mapper.Map<SprintReadDto>(sprintModel);

            return CreatedAtRoute(nameof(GetSprintById),
                new { ID = sprintReadDto.ID }, sprintReadDto);
        }

        [HttpPatch("{id}")]
        public ActionResult UpdateSprint(int id, JsonPatchDocument<SprintUpdateDto> jsonPatchDocument)
        {
            var sprint = _repository.GetSprintById(id);
            if (sprint == null)
                return NotFound();

            var sprintToPatch = _mapper.Map<SprintUpdateDto>(sprint);
            jsonPatchDocument.ApplyTo(sprintToPatch, ModelState);

            if (!TryValidateModel(sprintToPatch))
                return ValidationProblem(ModelState);

            _mapper.Map(sprintToPatch, sprint);
            _repository.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteSprint(int id)
        {
            var sprint = _repository.GetSprintById(id);
            if (sprint == null)
                return NotFound();

            _repository.DeleteSprint(sprint);
            _repository.SaveChanges();

            return NoContent();
        }
    }
}
