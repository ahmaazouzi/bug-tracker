﻿using System;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using BugTracker.Models;
using System.Collections.Generic;
using System.Linq;
using BugTracker.Dtos;
using Microsoft.AspNetCore.JsonPatch;

namespace BugTracker.Controllers
{
    [Route("attachments")]
    [ApiController]
    public class AttachmentController: ControllerBase
    {
        private readonly IAttachmentRepo _repository;
        private readonly IMapper _mapper;

        public AttachmentController(IAttachmentRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Attachment>> GetAttachments(int ticketID)
        {
            var attachments = _repository.GetAttachments();
            return Ok(attachments);
        }

        [HttpGet("{id}", Name = "GetAttachmentById")]
        public ActionResult<Attachment> GetAttachmentById(int id)
        {
            var attachment = _repository.GetAttachmentById(id);
            if (attachment != null)
                return Ok(_mapper.Map<AttachmentReadDto>(attachment));
            return NotFound();
        }

        [HttpPost]
        public ActionResult<Attachment> CreateAttachment(AttachmentCreateDto attachmentCreateDto)
        {
            var attachmentModel = _mapper.Map<Attachment>(attachmentCreateDto);
            _repository.CreateAttachment(attachmentModel);
            _repository.SaveChanges();

            return CreatedAtRoute(nameof(GetAttachmentById),
                new {ID = attachmentModel.ID },
                attachmentModel);
        }

        [HttpPatch("{id}")]
        public ActionResult UpdateAttachment(int id, JsonPatchDocument<AttachmentUpdateDto> jsonPatchDocument)
        {
            var attachment = _repository.GetAttachmentById(id);
            if (attachment == null)
                return NotFound();

            var attachmentToPatch = _mapper.Map<AttachmentUpdateDto>(attachment);
            jsonPatchDocument.ApplyTo(attachmentToPatch, ModelState);

            if (!TryValidateModel(attachmentToPatch))
                return ValidationProblem(ModelState);

            _mapper.Map(attachmentToPatch, attachment);
            _repository.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteAttachment(int id)
        {
            var attachment = _repository.GetAttachmentById(id);
            _repository.DeleteAttachment(attachment);
            _repository.SaveChanges();
            return NoContent();
        }
    }
}
