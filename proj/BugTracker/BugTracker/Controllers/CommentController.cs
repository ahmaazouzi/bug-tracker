using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using BugTracker.Models;
using BugTracker.Dtos;
using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;

namespace BugTracker.Controllers
{
    [Route("comments")]
    [ApiController]
    public class CommentController: ControllerBase
    {
        private readonly ICommentRepo _repository;
        private readonly IMapper _mapper;

        public CommentController(ICommentRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<CommentReadDto>> GetComments(int ticketID)
        {
            var comments = _repository.GetComments(ticketID);
            return Ok(_mapper.Map<IEnumerable<CommentReadDto>>(comments));
        }

        [HttpGet("{id}", Name = "GetCommentById")]
        public ActionResult<CommentReadDto> GetCommentById(int id)
        {
            var comment = _repository.GetCommentById(id);
            if (comment != null)
                return Ok(_mapper.Map<CommentReadDto>(comment));
            return NotFound();
        }

        [HttpPost]
        public ActionResult<CommentReadDto>CreateComment(CommentCreateDto commentCreateDto)
        {
            var commentModel = _mapper.Map<Comment>(commentCreateDto);
            _repository.CreateComment(commentModel);
            _repository.SaveChanges();

            var commentReadDto = _mapper.Map<CommentReadDto>(commentModel);

            return CreatedAtRoute(nameof(GetCommentById),
                new { ID = commentReadDto.ID }, commentReadDto);
        }

        [HttpPatch("{id}")]
        public ActionResult UpdateComment(int id, JsonPatchDocument<CommentUpdateDto> jsonPatchDocument)
        {
            var comment = _repository.GetCommentById(id);
            if (comment == null)
                return NotFound();

            var commentToPatch = _mapper.Map<CommentUpdateDto>(comment);
            jsonPatchDocument.ApplyTo(commentToPatch, ModelState);

            if (!TryValidateModel(commentToPatch))
                return ValidationProblem(ModelState);

            _mapper.Map(commentToPatch, comment);
            _repository.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteComment(int id)
        {
            var comment = _repository.GetCommentById(id);
            _repository.DeleteComment(comment);
            _repository.SaveChanges();
            return NoContent();
        }
    }
}
