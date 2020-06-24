using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BugTracker.Models
{
    public class Account
    {
        public int ID { get; set; }

        [MaxLength(256)]
        public string FirstName { get; set; }

        [MaxLength(256)]
        public string MiddleName { get; set; }

        [MaxLength(256)]
        public string LastName { get; set; }

        [MaxLength(1024)]
        public string PhotoUrl { get; set; }

        [MaxLength(256)]
        public string Email { get; set; }

        [MaxLength(256)]
        public string SpiritAnimal { get; set; }

        [MaxLength(5000)]
        public string Bio { get; set; }

        public int TeamID { get; set; }


        public Team Team { get; set; }

        public ICollection<Ticket> TicketsReported { get; set; }

        public ICollection<Assignment> Assignments { get; set; }
    }
}