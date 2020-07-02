using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using BugTracker.Models;
namespace BugTracker.Dtos
{
    public class AccountReadDto
    {
        public int ID { get; set; }

        public string FullName { get; set; }

        public string PhotoUrl { get; set; }

        public string Email { get; set; }

        public Role Role { get; set; }

        public string SpiritAnimal { get; set; }

        public string Bio { get; set; }

        public int TeamID { get; set; }

        public ICollection<Ticket> TicketsReported { get; set; }

        public ICollection<Assignment> Assignments { get; set; }

    }
}
