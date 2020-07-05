using System;
using System.ComponentModel.DataAnnotations;

namespace BugTracker.Dtos
{
    public class AssignmentCreateDto
    {
        public int ID { get; set; }

        [Required]
        public int TicketID { get; set; }

        [Required]
        public int AccountID { get; set; }
    }
}
