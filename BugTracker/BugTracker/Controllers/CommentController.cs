using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using BugTracker.Models;
using BugTracker.Dtos;
using AutoMapper;

namespace BugTracker.Controllers
{
    [Route("bugtracker/comments")]
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

        //private readonly MockCommentRepo _repository = new MockCommentRepo();

        [HttpGet]
        public ActionResult<IEnumerable<CommentReadDto>> GetComments()
        {
            var comments = _repository.GetComments();
            return Ok(_mapper.Map<IEnumerable<CommentCreateDto>>(comments));
        }

        [HttpGet("{id}")]
        public ActionResult<CommentReadDto> GetCommentById(int id)
        {
            var comment = _repository.GetCommentById(id);
            if (comment != null)
                return Ok(_mapper.Map<CommentReadDto>(comment));
            return NotFound();
        }
    }
}
