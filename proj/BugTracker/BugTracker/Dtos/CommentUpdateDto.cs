using System;
using System.ComponentModel.DataAnnotations;

namespace BugTracker.Dtos
{
    public class CommentUpdateDto
    {
        public CommentUpdateDto(int ticketID)
        {
            var date = DateTime.Now;
            this.Date = new DateTime(date.Year,
                date.Month,
                date.Day,
                date.Hour,
                date.Minute,
                date.Second);

            this.TicketID = ticketID;
        }

        public int AccountID { get; set; }

        public int TicketID { get; set; }

        [MaxLength(16000)]
        [Required]
        public string Payload { get; set; }

        public DateTime Date { get; set; }
    }
}
