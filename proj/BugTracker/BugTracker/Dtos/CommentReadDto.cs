using System.Collections.Generic;

namespace BugTracker.Dtos
{
    public class CommentReadDto
    {
        public int ID { get; set; }

        public string Name { get; set; }

        public ICollection<AccountReadDto> Members { get; set; }
        public ICollection<TicketReadDto> Tickets { get; set; }
    }
}
