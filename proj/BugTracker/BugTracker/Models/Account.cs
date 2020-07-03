using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace BugTracker.Models
{
    public class Account
    {
        public int ID { get; set; }

        [MaxLength(256)]
        [Required]
        public string FirstName { get; set; }

        [MaxLength(256)]
        public string MiddleName { get; set; }

        [Required]
        [MaxLength(256)]
        public string LastName { get; set; }

        public string FullName => FirstName + (string.IsNullOrEmpty(MiddleName) ? " " : (" " + MiddleName + " ")) + LastName;

        [MaxLength(1024)]
        public string PhotoUrl { get; set; }

        [Required]
        [MaxLength(256)]
        public string Email { get; set; }

        [RegularExpression(@"(admin|regular|lead)")]
        public string Role { get; set; }

        [MaxLength(256)]
        public string SpiritAnimal { get; set; }

        [MaxLength(5000)]
        public string Bio { get; set; }

        [Required]
        public int TeamID { get; set; }

        public ICollection<Assignment> Assignments { get; set; }
    }
}