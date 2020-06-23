using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using BugTracker.Models;
using BugTracker.Data;

namespace BugTracker.Controllers
{
    [Route("bugtracker/comments")]
    [ApiController]
    public class CommentController: ControllerBase
    {
        private readonly MockCommentRepo _repository = new MockCommentRepo();

        [HttpGet]
        public ActionResult<IEnumerable<Comment>> GetComments()
        {
            var comments = _repository.GetComments();
            return Ok(comments);
        }

        [HttpGet("{id}")]
        public ActionResult<Comment> GetCommentById(int id)
        {
            var comment = _repository.GetCommentById(id);
            return Ok(comment);
        }
    }
}
