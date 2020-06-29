using System;
using System.ComponentModel.DataAnnotations;

namespace BugTracker.Dtos
{
    public class AttachmentCreateDto
    {
        public int ID { get; set; }

        [Required]
        [MaxLength(2500)]
        public string Url { get; set; }

        public int TicketID { get; set; }
    }
}
