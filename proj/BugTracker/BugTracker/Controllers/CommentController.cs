using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using BugTracker.Models;
using BugTracker.Dtos;
using AutoMapper;

namespace BugTracker.Controllers
{
    [Route("tickets/{ticketID}/comments")]
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
        public ActionResult<IEnumerable<CommentReadDto>> GetComments(int ticketID)
        {
            var comments = _repository.GetComments(ticketID);
            return Ok(_mapper.Map<IEnumerable<CommentReadDto>>(comments));
        }

        [HttpGet("{id}")]
        public ActionResult<CommentReadDto> GetCommentById(int id)
        {
            var comment = _repository.GetCommentById(id);
            if (comment != null)
                return Ok(_mapper.Map<CommentReadDto>(comment));
            return NotFound();
        }

        [HttpPost]
        public ActionResult<CommentReadDto>CreateComment(CommentCreateDto commentCreateDto, int ticketID)
        {
            var commentModel = _mapper.Map<Comment>(commentCreateDto);
            commentModel.TicketID = ticketID;
            _repository.CreateComment(commentModel, ticketID);
            _repository.SaveChanges();
            return Ok(commentModel);
        }
    }
}
